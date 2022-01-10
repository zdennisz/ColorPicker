import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

import ShirtPreview from "../ShirtPreview/ShirtPreview";

const ColorPickerController = () => {
	const [hslColor, setHslColor] = useState(null);

	const updateHSLColor = (hue, sat, light) => {
		setHslColor(
			`hsl(${hue},${Math.floor(sat * 100)}%,${Math.floor(light * 100)}%)`
		);
	};

	return (
		<>
			<ColorPicker updateHSLColor={updateHSLColor} />
			<ShirtPreview previewShirtColor={hslColor} />
		</>
	);
};

export default ColorPickerController;
