import React, { useRef, useEffect, useState } from "react";
import Preview from "./../Preview/Preview";
import Button from "./../Button/Button";
import "./ColorPicker.scss";

const ColorPicker = () => {
	const canvasRef = useRef(null);
	const [hslColorValues, setHslColorValues] = useState({
		hue: 260,
		sat: 0.5,
		light: 0.6,
	});

	const changeColor = (e) => {
		e.preventDeafult();
		console.log("submit was clicked");
	};
	const captureColorValue = (e) => {
		let rect = canvasRef.current.getBoundingClientRect();
		let sat = e.clientX - rect.left;
		let light = e.clientY - rect.top;
		setHslColorValues((prevState) => ({
			...prevState,
			sat: sat / rect.width,
			light: 1 - light / rect.height,
		}));
	};

	useEffect(() => {
		console.log("hsl values", hslColorValues);
	}, [hslColorValues]);
	return (
		<form className='color_picker_container' onSubmit={changeColor}>
			<canvas
				width={404}
				height={404}
				ref={canvasRef}
				className='canvas_style'
				onClick={captureColorValue}
			></canvas>
			<Preview
				hue={hslColorValues.hue}
				saturation={hslColorValues.sat}
				lightness={hslColorValues.light}
			/>
			<Button />
		</form>
	);
};

export default ColorPicker;
