import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { ProductsActions } from '../../store/Products/ProductsSlice'

import classes from '../../styles/Cart.module.css'
const ProductsItem = ({ id, title, image, price, type, quantity }) => {
  const dispatch = useDispatch()
  const addCartItem = async () => {
    dispatch(
      ProductsActions.addCartItem({
        id,
        title,
        image,
        price,
        amount: 1,
        type,
      }),
    )
  }

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
      <div className="product-item-2">
        <div className="product-inner">
          <div
            className="product-thumb"
            style={{ height: '280px', position: 'relative' }}
          >
            {quantity <= 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  zIndex: 100,
                }}
              >
                <span
                  style={{
                    padding: '4px',
                    backgroundColor: '#000',
                    color: '#fff',
                  }}
                >
                  OUT OF STOCK
                </span>
              </div>
            )}
            <Image src={image} alt="product" width={250} height={100} />
          </div>
          <div className="product-content">
            <a href="#">
              <h6>{title}</h6>
            </a>
            <div className="rating">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <h6 className="price">&#8358;{price}</h6>

            {quantity > 0 && (
              <div
                className={`${classes.add__btn} cart-option`}
                onClick={addCartItem}
              >
                <div className="lab-btn">
                  <span>Add To Cart</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsItem
