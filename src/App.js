import React, { useState } from "react";
import Header from "./components/Layout/Header";
import ContextProvider from "./store/ContextProvider";
import Cart from "./components/Cart/Cart";
import Candy from "./components/Candy/Candy";

function App() {
	const [cartDisplay, setCartDisplay] = useState(false);
	const cartDisplayHandler = () => {
		setCartDisplay(true);
	};
	const cartDisplayCloser = () => {
		setCartDisplay(false);
	};

	return (
		<ContextProvider>
			<Header onShowCart={cartDisplayHandler} />
			{cartDisplay && <Cart onCloseCart={cartDisplayCloser} />}
			<Candy />
		</ContextProvider>
	);
}

export default App;
