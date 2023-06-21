import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SelectedProducts from '../../components/SelectedProducts/SelectedProducts'
import Button from '../../components/Button'
import classes from '../../styles/Shop.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
const MyCarts = () => {
  const router = useRouter()
  const { totalQuantity, totalAmount } = useSelector((state) => state.products)

  return (
    <section>
      <Header />
      <div className={classes.shop}>
        <h2 className="display-6 display-md-4">
          Your Cart ({totalQuantity} items )
        </h2>
        <h4 className="lead">Here are all your added items</h4>
        {totalQuantity === 0 && <div class="d-flex justify-center align-center">
          <Image width={300} height={300} src='/assets/images/new/emptyCart.png'   />
          </div>}
        { totalQuantity > 0 && <div className="col-12">
          <SelectedProducts />
        </div>}
        {totalQuantity > 0 && <div className="text-right">
          <p className="display-6 ">
            {' '}
            Total Price: <span>&#8358;{totalAmount}</span>
          </p>
        </div>}
       {totalQuantity > 0 && <div className="text-right">
          {' '}
          <Button
            onClick={() => router.push('/shop/checkouts')}
            className="btn btn-dark"
          >
            Check Out
          </Button>
        </div>}
      </div>
      <Footer />
    </section>
  )
}
export default MyCarts
