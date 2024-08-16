import React, { useContext } from "react";
import styles from "./Cart.module.css";
import ModalOverlay from "./../UI/ModalOverlay";
import globalContext from "../../store/global-context";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartCtx = useContext(globalContext);

	const itemAdder = (myitem) => {
		cartCtx.addCart({ ...myitem, qty: 1 });
	};

	const itemRemover = (id) => {
		cartCtx.removeCart(id);
	};

	return (
		<ModalOverlay>
			<ul className={styles.cartList}>
				{cartCtx.cartItem.map((item) => {
					return (
						<CartItem
							key={item.id}
							id={item.id}
							name={item.name}
							price={item.price}
							qty={item.qty}
							onMinus={itemRemover}
							onAdder={itemAdder.bind(null, item)}
						/>
					);
				})}
			</ul>
			<div className={styles.cartTotal}>
				<h2>Total Amount</h2>
				<h2>{cartCtx.amount}</h2>
			</div>
			<div className={styles.btn}>
				<button className={styles["btn-close"]} type="button" onClick={props.onCloseCart}>
					Close
				</button>
				<button className={styles["btn-order"]} type="button">
					Order
				</button>
			</div>
		</ModalOverlay>
	);
};

export default Cart;
