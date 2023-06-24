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
  const { totalQuantity, totalAmount,carts } = useSelector((state) => state.products)

  return (
    <section>
      <Header />
      <div className={classes.shop}>
        <h2 className="display-6 display-md-4">
          Your Cart ({carts.length} items )
        </h2>
        <h4 className="lead">Here are all your added items</h4>
        {!carts.length && <div class="d-flex justify-center align-center">
          <Image width={300} height={300} src='/assets/images/new/emptyCart.png'   />
          </div>}
        { carts.length > 0 && <div className="col-12">
          <SelectedProducts />
        </div>}
        {carts.length > 0 && <div className="text-right">
          <p className="lead ">
            {' '}
            Total Price: <span>&#8358;{totalAmount.toLocaleString()}</span>
          </p>
        </div>}
        <br/>
       {carts.length > 0 && <div className="text-right">
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
