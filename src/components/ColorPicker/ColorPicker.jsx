import React, { useRef, useEffect, useState, useCallback } from "react";
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
	const drawInitialColors = useCallback(() => {
		let ctx = canvasRef.current.getContext("2d");
		let rect = canvasRef.current.getBoundingClientRect();
		for (let i = 0; i < rect.width / 4; i++) {
			for (let j = 0; j < rect.height / 4; j++) {
				ctx.fillStyle = `hsl(${hslColorValues.hue},${i}%,${100 - j}%)`;
				ctx.fillRect(i * 4, j * 4, 4, 4);
			}
		}
	}, [hslColorValues]);

	useEffect(() => {
		drawInitialColors();
	}, [hslColorValues, drawInitialColors]);
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
