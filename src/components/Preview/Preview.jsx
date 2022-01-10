import React from "react";
import "./Preview.scss";
const Preview = ({ hue, saturation, lightness }) => {
	console.log("math", Math.floor(saturation * 100));
	return (
		<div className='preview-container'>
			<div
				className='preview-color'
				style={{
					color: `hsl(${hue},${Math.floor(saturation * 100)}%,${Math.floor(
						lightness
					)}%)`,
				}}
			></div>
			<input className='preview-text-box' readOnly></input>
		</div>
	);
};

export default Preview;
