import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.map((item) => <li>{item.name}</li>);

  const totalAmount = `$${cartCtx.totalAmout.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button button className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
