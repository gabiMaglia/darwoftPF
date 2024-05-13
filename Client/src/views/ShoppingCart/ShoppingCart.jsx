import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OutlinedButton from "../../componenets/ui/OutlinedButton/OutlinedButton";
import PATH_ROUTES from "../../helpers/routes.helper";
import styles from "./shoppingCart.module.css";
import {
  incrementAmount,
  removeItem,
  restAmount,
  clearCart,
} from "../../redux/slices/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartSlice.cartItems);
  const totalAmount = useSelector((state) => state.cartSlice.cartTotalItems);

  const handleAddItem = (id) => {
    dispatch(incrementAmount({ _id: id }));
  };

  const handleDecrementItem = (id) => {
    dispatch(restAmount({ _id: id }));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem({ _id: id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <section className={styles.shoppingCartCont}>
{!!products?
      <table className={styles.shoppingCartTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td className={styles.actions}>
                <OutlinedButton onClick={() => handleAddItem(product._id)}>
                  +
                </OutlinedButton>
                <OutlinedButton
                  onClick={() => handleDecrementItem(product._id)}
                >
                  -
                </OutlinedButton>
                <OutlinedButton
                  onClick={() => handleRemoveItem(product._id, true)}
                >
                  Remove
                </OutlinedButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      :
      <h2>Agrega items al carrito</h2>
}
      <div className={styles.controls}>
        <div className={styles.total}>
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
        <div className={styles.total}>
          <strong>TotalAmount:</strong> {totalAmount}
        </div>
        <OutlinedButton onClick={handleClearCart}>Clear Cart</OutlinedButton>
        <OutlinedButton>Checkout</OutlinedButton>
        <Link to={PATH_ROUTES.HOME}>
          <OutlinedButton>Volver</OutlinedButton>
        </Link>
      </div>
    </section>
  );
};

export default ShoppingCart;
