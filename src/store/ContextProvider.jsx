import React, { useState } from "react";
import globalContext from "./global-context";

const ContextProvider = (props) => {
	const [myCandyList, setCandyItem] = useState([]);
	const [myCartList, setCartItem] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);

	const candyFormHandler = (candyList) => {
		setCandyItem((prevmyCandyList) => {
			return [...prevmyCandyList, candyList];
		});
	};

	const cartHandler = (cartList) => {
		setCartItem((prevmyCartList) => {
			for (let clist of prevmyCartList) {
				if (clist.id === cartList.id) {
					clist.qty += cartList.qty;
					return prevmyCartList;
				}
			}
			return [...prevmyCartList, cartList];
		});
		setTotalAmount((prevTotal) => {
			return prevTotal + cartList.price * cartList.qty;
		});
	};
	const removeHandler = (id) => {
		setCartItem((prevmyCartList) => {
			for (let clist of prevmyCartList) {
				if (clist.id === id && clist.qty === 1) {
					return prevmyCartList.filter((clist) => clist.id !== id);
				} else if (clist.id === id) {
					clist.qty -= 1;
					return prevmyCartList;
				}
			}
		});
		setTotalAmount((prevTotal) => {
			for (let clist of myCartList) {
				if (clist.id === id && clist.qty >= 1) {
					return prevTotal - clist.price;
				}
			}
		});
	};

	const globalCtx = {
		candyItem: myCandyList,
		cartItem: myCartList,
		addCandy: candyFormHandler,
		addCart: cartHandler,
		removeCart: removeHandler,
		amount: totalAmount,
	};
	return (
		<globalContext.Provider value={globalCtx}>{props.children}</globalContext.Provider>
	);
};

export default ContextProvider;
