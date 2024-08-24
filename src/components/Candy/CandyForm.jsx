import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import Button from "./../UI/Button";
import styles from "./CandyForm.module.css";
import globalContext from "../../store/global-context";

const CandyForm = () => {
	const [candyName, setCandyName] = useState("");
	const [candyDesc, setCandyDesc] = useState("");
	const [candyPrice, setCandyPrice] = useState("");

	const formCtx = useContext(globalContext);

	const candyNameHandler = (event) => {
		setCandyName(event.target.value);
	};

	const candyDescHandler = (event) => {
		setCandyDesc(event.target.value);
	};
	const candyPriceHandler = (event) => {
		setCandyPrice(event.target.value);
	};

	const addCandyHandler = (event) => {
		event.preventDefault();
		const CandyData = {
			name: candyName,
			desc: candyDesc,
			price: candyPrice,
			id: +Math.random(),
		};

		formCtx.addCandy(CandyData);

		// console.log(CandyData);
		setCandyName("");
		setCandyDesc("");
		setCandyPrice("");
	};
	return (
		<Card className={styles.form}>
			<form onSubmit={addCandyHandler}>
				<div>
					<label htmlFor="candyname" style={{}}>
						Candy Name :
					</label>
					<input
						type="text"
						id="candyname"
						value={candyName}
						onChange={candyNameHandler}
						required
					/>
				</div>

				<div>
					<label htmlFor="candyDescription" style={{}}>
						Candy Description :
					</label>
					<input
						type="text"
						id="candyDescription"
						value={candyDesc}
						onChange={candyDescHandler}
					/>
				</div>

				<div>
					<label htmlFor="price">Price</label>
					<input
						type="number"
						id="price"
						value={candyPrice}
						onChange={candyPriceHandler}
						required
					/>
				</div>
				<div>
					<Button type="submit">Add Candy</Button>
				</div>
			</form>
		</Card>
	);
};

export default CandyForm;
