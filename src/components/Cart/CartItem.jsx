import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
	const candyMinusHandler = () => {
		props.onMinus(props.id);
	};
	return (
		<li>
			<div>
				<h5>{props.name}</h5>
				<h5>
					${props.price}
					<span className={styles.qty}>x {props.qty}</span>
				</h5>
			</div>
			<div className={styles.actionBtn}>
				<button onClick={candyMinusHandler}>-</button>
				<button onClick={props.onAdder}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
