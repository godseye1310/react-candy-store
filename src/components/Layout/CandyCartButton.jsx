import React, { useContext } from "react";
import styles from "./CandyCartButton.module.css";
import globalContext from "../../store/global-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CandyCartButton = (props) => {
	const cartBtnCtx = useContext(globalContext);

	const cartItems = cartBtnCtx.cartItem.reduce((curNumber, items) => {
		return curNumber + items.qty;
	}, 0);
	return (
		<>
			<button className={styles.button} onClick={props.onClick}>
				<span className={styles.icon}>
					<FontAwesomeIcon icon={faCartShopping} />
				</span>
				<span>Your Cart</span>
				<span className={styles.badge}>{cartItems}</span>
			</button>
		</>
	);
};

export default CandyCartButton;
