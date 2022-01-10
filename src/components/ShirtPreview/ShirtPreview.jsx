import React from "react";
import { ReactComponent as Shirt } from "./../../assets/shirt.svg";
import { ReactComponent as Logo } from "./../../assets/reallygood.svg";
import { ReactComponent as Background } from "./../../assets/checkerboard.svg";
import "./ShirtPreview.scss";
const ShirtPreview = ({ hue, saturation, lightnesss }) => {
	return (
		<div className='shirt-preivew-container'>
			<Background>
				<Shirt>
					<Logo />
				</Shirt>
			</Background>
		</div>
	);
};

export default ShirtPreview;
