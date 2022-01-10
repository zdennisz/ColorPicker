import React from "react";
import { ReactComponent as Shirt } from "./../../assets/shirt.svg";
import { ReactComponent as Logo } from "./../../assets/reallygood.svg";
import { ReactComponent as Background } from "./../../assets/checkerboard.svg";
import "./ShirtPreview.scss";
const ShirtPreview = ({ hue, saturation, lightnesss }) => {
	return (
		<div className='shirt-preivew-container'>
			<div className='background-container'>
				<Background />
			</div>
			<div className='shirt-container'>
				<Shirt width={466} height={439} />
			</div>
			<div className='really-good-container'>
				<Logo width={122} height={139} />
			</div>
		</div>
	);
};

export default ShirtPreview;
