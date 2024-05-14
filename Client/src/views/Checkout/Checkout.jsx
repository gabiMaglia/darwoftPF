import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OutlinedButton from "../../componenets/ui/OutlinedButton/OutlinedButton";
import PATH_ROUTES from "../../helpers/routes.helper";
import styles from "./checkout.module.css";
import { clearCart } from "../../redux/slices/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartSlice.cartItems);
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setStep(1); 
  };

  return (
    <div className={styles.checkoutContainer}>
      {step === 1 && (
        <div className={styles.step}>
          <h2>Confirm Your Order</h2>
          <ul className={styles.orderSummary}>
            {products.map((product) => (
              <li key={product._id}>
                {product.name} - {product.quantity} x ${product.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <OutlinedButton onClick={handleNextStep}>Confirm Order</OutlinedButton>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step}>
          <h2>Processing Payment</h2>
          <p>Please wait while we process your payment...</p>
          <OutlinedButton onClick={handleNextStep}>Simulate Payment</OutlinedButton>
        </div>
      )}

      {step === 3 && (
        <div className={styles.step}>
          <h2>Success!</h2>
          <p>Your payment has been processed successfully.</p>
          <Link to={PATH_ROUTES.HOME}>
            <OutlinedButton onClick={handleClearCart}>Back to Home</OutlinedButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
