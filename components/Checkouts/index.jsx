import { usePaystackPayment } from 'react-paystack'
import { useAuth } from '../../contexts/auth.context'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Form from './Form'
import Bank from './Bank'
import Flutter from './Flutter'

import classes from './Checkouts.module.css'
import { useSelector } from 'react-redux'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import SelectedProducts from '../SelectedProducts/SelectedProducts'
import { AiFillBackward } from 'react-icons/ai'
import Input from './Input'
const Checkouts = () => {
  const [bankModal, setBankModal] = useState(false)
  const [flutterModal, setFlutterModal] = useState(false)
  const [checkoutFormData, setCheckoutFormData] = useState(null)
  const [success, setSuccess] = useState(false)
  const [paystackLoader, setPaystackLoader] = useState(false)
  const { users, carts, totalAmount } = useSelector((state) => state.products)

  const { authUser } = useAuth()
  const config = (email, amount) => ({
    reference: new Date().getTime().toString(),
    email,
    amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEXT_PUBLIC_KEY,
  })
  // console.log('config', config(checkoutFormData?.email ?? "",  parseInt(totalAmount) * 100))
  const initializePayment = usePaystackPayment(
    config(checkoutFormData?.email ?? '', parseInt(totalAmount) * 100),
  )
  const router = useRouter()

  // useEffect(() => {
    
    
  //   if (success) {
  //     // addToDataBase()
  //     // createOrder()
  //   }
  // }, [success, totalAmount, carts, users, authUser])

  const addToDataBase = async (reference) => {
    // Storing in database
    const docRef = collection(db, 'transactions')
    console.log(docRef)
    await addDoc(docRef, {
      email: checkoutFormData?.email,
      firstname: checkoutFormData?.firstname,
      lastname: checkoutFormData?.lastname,
      address: checkoutFormData?.address,
      zip: checkoutFormData?.zip,
      country: checkoutFormData?.country,
      state: checkoutFormData?.state,
      phone: checkoutFormData?.phone,
      status: 'success',
      date: new Date().toLocaleDateString(),
      amount: Number(totalAmount) * 100,
      paymentType: 'Paystack',
      reference: reference,
    })
  }

  const createOrder = async () => {
    // const signedInUserEmail = authUser?.email
    // const user = users.find((user) => user.email === signedInUserEmail)

    const docRef = collection(db, 'orders')
    await addDoc(docRef, {
      totalQuantity: carts.length,
      carts: carts,
      grandTotal: totalAmount,
      paymentStatus: 'paid',
      orderStatus: 'pending',
      customerName: `${checkoutFormData?.firstname} ${checkoutFormData?.lastname}` ,
      customerEmail:checkoutFormData?.email|| '',
      customerPhone: checkoutFormData?.phone || '',
    })
  }
  const onSuccess = async  (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    await addToDataBase(reference)
    await createOrder()
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      setPaystackLoader(false)
    }, 2000)
    router.push('/shop/ps-checkout-success')
  }

  const onClose =async () => {
    setPaystackLoader(false)
    // implementation for  whatever you want to do when the Paystack dialog closed. setSuccess(true);
  }

  const getFormDatas = (datas) => {
    setPaystackLoader(true)
    setCheckoutFormData(datas)
    setTimeout(() => {
      initializePayment(onSuccess, onClose)
    }, 500)
  }

  const onBankFormData = (data) => {
    setBankModal(true)
    setCheckoutFormData(data)
  }

  const closeBank = () => {
    setBankModal(false)
  }
  const closeFlutter = () => {
    setFlutterModal(false)
  }
  return (
    <>
      <div className={classes.payment__form}>
        {bankModal && (
          <Bank 
          carts={carts}
            onClose={closeBank}
            totalAmount={totalAmount}
            checkoutFormData={checkoutFormData}
          />
        )}
        {flutterModal && <Flutter onClose={closeFlutter} />}
      </div>

      <div className="container">
        <div className="row mb-8">
          <div className="col-sm-12 col-md-4">
            <button className="btn btn-dark " onClick={() => router.back()}>
              <i className="fa fa-arrow-left" style={{ color: 'white' }} /> Back
            </button>
            <>
              <SelectedProducts />
            </>
            <hr />
            <div className="border p-2">
              <h3></h3>
              <Input
                label="Apply your coupon to get discount"
                placeholder="Enter coupon code"
              />
              <div className="flex justify-content-between align-baseline">
                <p>
                  How do i get a coupon?
                  <a href="#" className="underline ml-1">
                    {' '}
                    Click here
                  </a>
                </p>
                <button className="btn btn-dark">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-1 d-sm-none d-md-block" />
          <div className="col-sm-12 col-md-6 mt-8 border">
            <Form 
              paystackLoader={paystackLoader}
              onPaystack={getFormDatas}
              onBank={onBankFormData}
              onFlutter={() => setFlutterModal(true)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Checkouts
