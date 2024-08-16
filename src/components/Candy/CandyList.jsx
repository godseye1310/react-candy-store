import React, { useContext } from "react";
import styles from "./CandyList.module.css";
import Card from "../UI/Card";
import CandyItem from "./CandyItem/CandyItem";
import globalContext from "../../store/global-context";

const CandyList = () => {
	const listCtx = useContext(globalContext);

	// let addCandy;

	const addOneItem = (myCandy) => {
		// addCandy = {...myCandy, qty:1}
		listCtx.addCart({ ...myCandy, qty: 1 });
	};

	const addTwoItem = (myCandy) => {
		// addCandy = {...myCandy, qty:2}
		listCtx.addCart({ ...myCandy, qty: 2 });
	};

	const addThreeItem = (myCandy) => {
		// addCandy = {...myCandy, qty:3}
		listCtx.addCart({ ...myCandy, qty: 3 });
	};

	const ListItem = listCtx.candyItem.map((candy) => {
		return (
			<CandyItem
				key={candy.id}
				id={candy.id}
				name={candy.name}
				description={candy.desc}
				price={candy.price}
				onAddOne={addOneItem.bind(null, candy)}
				onAddTwo={addTwoItem.bind(null, candy)}
				onAddThree={addThreeItem.bind(null, candy)}
			/>
		);
	});

	return (
		<Card className={styles.list}>
			<ul>{ListItem}</ul>
		</Card>
	);
};

export default CandyList;
