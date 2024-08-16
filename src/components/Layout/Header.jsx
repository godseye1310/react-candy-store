import React from "react";
import styles from "./Header.module.css";
import CandyCartButton from "./CandyCartButton";
import candyImg from "./../../Assets/pexels.jpg";

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactCandy</h1>
				<CandyCartButton onClick={props.onShowCart} />
			</header>
			<div className={styles.candyImage}>
				<img src={candyImg} alt="A table full with tasty food" />
			</div>
		</>
	);
};

export default Header;
