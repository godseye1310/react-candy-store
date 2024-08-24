import React from "react";
import styles from "./CandyItem.module.css";

const CandyItem = (props) => {
	return (
		<>
			<li className={styles.list}>
				<div className={styles.listcontent}>
					<div>
						<h3>{props.name}</h3>
						<p className={styles.price}> ₹ {props.price}</p>
					</div>

					<p className={styles.description}>{props.description}</p>
				</div>
				<div className={styles.btn}>
					<button onClick={props.onAddOne}>Add 1</button>
					<button onClick={props.onAddTwo}>Add 2</button>
					<button onClick={props.onAddThree}>Add 3</button>
				</div>
			</li>
			<hr className={styles.hr} />
		</>
	);
};

export default CandyItem;
