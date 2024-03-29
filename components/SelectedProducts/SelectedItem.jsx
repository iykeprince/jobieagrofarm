import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../store/Products/ProductsSlice";
import classes from "./SelectedProducts.module.css";

const SelectedItem = ({ title, price, totalPrice, id, image, quantity }) => {
  const dispatch = useDispatch();
  const deleteCartItems = () => {
    dispatch(ProductsActions.deleteCartItem({ id }));
  };
  const reduceCartItem = () => {
    dispatch(ProductsActions.removeCartItem({ id }));
  };
  const increaseCartItem = () => {
    dispatch(
      ProductsActions.addCartItem({
        id,
        title,
        image,
        price,
        amount: 1,
        totalPrice,
        quantity,
      })
    );
  };

  return (
    <>
      <tr className={classes.tr}>
        <td>
          <i
            className={`icofont-ui-delete ${classes.delete}`}
            onClick={deleteCartItems}
          ></i>
        </td>
        <td className={classes.image}>
          <Image src={image} alt="product" width={100} height={80} />
        </td>
        <td>{title} </td>
        <td>
          <span>
            <i
              className={`icofont-minus ${classes.add}`}
              onClick={reduceCartItem}
            ></i>
          </span>
          {quantity}{" "}
          <span>
            <i
              className={`icofont-plus ${classes.add}`}
              onClick={increaseCartItem}
            ></i>
          </span>
        </td>
        <td>&#8358;{price.toLocaleString()}</td>
        <td>&#8358;{totalPrice.toLocaleString()}</td>
      </tr>
    </>
  );
};
export default SelectedItem;
