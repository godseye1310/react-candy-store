import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
	const candyMinusHandler = () => {
		props.onMinus(props.id);
	};
	return (
		<li className={styles.item}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.amount}>
					<h3>₹ {props.price}</h3>
					<span className={styles.qty}>x {props.qty}</span>
				</div>
			</div>
			<div className={styles.actionBtn}>
				<button onClick={candyMinusHandler}>-</button>
				<button onClick={props.onAdder}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
