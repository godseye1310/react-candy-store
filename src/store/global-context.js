import React from "react";

const globalContext = React.createContext({
	candyItem: [],
	cartItem: [],
	addCandy: (candyList) => {},
	addCart: (cartList) => {},
	removeCart: (id) => {},
	amount: 0,
});

export default globalContext;
