import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Checkouts from '../../components/Checkouts'
import classes from '../../components/Checkouts/Checkouts.module.css'
const Checkout = () => {
  return (
    <>
      <Header />
      <section
        // className={classes.contact__form}
        style={{ marginTop: '130px' }}
      ></section>
      <Checkouts />
      <Footer />
    </>
  )
}
export default Checkout
