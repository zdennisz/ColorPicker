import React from "react";
import { ReactComponent as Shirt } from "./../../assets/shirt.svg";
import { ReactComponent as Background } from "./../../assets/checkerboard.svg";
import LogoSvg from "../LogoSvg/LogoSvg";
import "./ShirtPreview.scss";
const ShirtPreview = ({ previewShirtColor }) => {
	const checkParams = () => {
		if (!previewShirtColor) {
			return `hsl(260,50%,60%)`;
		} else {
			return previewShirtColor;
		}
	};

	return (
		<div className='shirt-preivew-container'>
			<div className='background-container'>
				<Background />
			</div>
			<div className='shirt-container'>
				<Shirt width={555} height={555} />
			</div>
			<div className='logo-container'>
				<LogoSvg width={"220"} height={"220"} fill={checkParams()} />
			</div>
		</div>
	);
};

export default ShirtPreview;
