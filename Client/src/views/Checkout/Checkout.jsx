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
          <h2>Confirmas tu orden ?</h2>
          <ul className={styles.orderSummary}>
            {products.map((product) => (
              <>
                <li key={product._id}>
                  {product.name} - {product.quantity} x $
                  {product.price.toFixed(2)}
                </li>
              </>
            ))}
            <p>Total: ${products.reduce((acc, e) =>  acc + e.price, 0)}</p>
          </ul>
          <span className={styles.confirm}>
            <OutlinedButton onClick={handleNextStep}>
              Confirm Order
            </OutlinedButton>
          </span>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step}>
          <h2>Procesando Pago </h2>
          <p>Por favor aguarda un minuto mientras procesamos tu pago...</p>
          <span className={styles.confirm}>
            <OutlinedButton onClick={handleNextStep}>
              Simulate Payment
            </OutlinedButton>
          </span>
        </div>
      )}

      {step === 3 && (
        <div className={styles.step}>
          <h2>Listo!</h2>
          <p>Tu pago ha sido procesado correctamente.</p>
          <Link to={PATH_ROUTES.HOME}>
            <span className={styles.confirm}>
              <OutlinedButton onClick={handleClearCart}>Volver</OutlinedButton>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
