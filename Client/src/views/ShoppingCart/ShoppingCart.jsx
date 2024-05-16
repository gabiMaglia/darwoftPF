import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OutlinedButton from "../../componenets/ui/OutlinedButton/OutlinedButton";
import PATH_ROUTES from "../../helpers/routes.helper";
import {
  incrementAmount,
  removeItem,
  restAmount,
  clearCart,
} from "../../redux/slices/cartSlice";
import toast from "react-hot-toast";

import styles from "./shoppingCart.module.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cartSlice.cartItems);
  const user = useSelector((state) => state.auth.user);
  const isLogged = useSelector((state) => state.auth.isLogged);
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
  const handleCheckout = () => {
    if (!isLogged) {
      toast.error("Debes iniciar sesion para seguir comprando");
      return;
    }
    if (!user?.isActive) {
      toast.error("Debes activar tu usuario para poder continuar comprando");
      return;
    }
  
    if (totalAmount === 0) {
      toast.error("Necesitas agregar productos al carrito para poder comprar");
      return;
    }
    
    navigate(PATH_ROUTES.CHECKOUT);
  };

  return (
    <section className={styles.shoppingCartCont}>
      <h2>Carrito de Compras</h2>
      {products ? (
        <table className={styles.shoppingCartTable}>
          <thead>
            <tr>
              <th>Productos</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Acciones</th>
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
                    Eliminar
                  </OutlinedButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Agrega items al carrito</h2>
      )}
      <div className={styles.controls}>
        <div className={styles.total}>
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
        <div className={styles.total}>
          <strong>Unidades Totales:</strong> {totalAmount}
        </div>
        <OutlinedButton onClick={handleClearCart}>
          Limpiar Carrito
        </OutlinedButton>

        <OutlinedButton onClick={handleCheckout}>Comprar</OutlinedButton>

        <Link to={PATH_ROUTES.HOME}>
          <OutlinedButton>Volver</OutlinedButton>
        </Link>
      </div>
    </section>
  );
};

export default ShoppingCart;
