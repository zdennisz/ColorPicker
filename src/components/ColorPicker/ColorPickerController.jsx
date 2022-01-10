import React from "react";
import ColorPicker from "./ColorPicker";

import ShirtPreview from "../ShirtPreview/ShirtPreview";

const ColorPickerController = () => {
	return (
		<>
			<ColorPicker />

			<ShirtPreview hue={260} saturation={0.6} lightnesss={0.5} />
		</>
	);
};

export default ColorPickerController;
