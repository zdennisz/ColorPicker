import React from "react";
import "./Preview.scss";
const Preview = ({ hue, saturation, lightness }) => {
	return (
		<div className='preview-container'>
			<div
				className='preview-color'
				style={{
					backgroundColor: `hsl(${hue},${Math.floor(
						saturation * 100
					)}%,${Math.floor(lightness * 100)}%)`,
				}}
			></div>
			<input
				className='preview-text-box'
				readOnly
				value={`hsl(${hue}, ${Math.floor(saturation * 100)}%, ${Math.floor(
					lightness * 100
				)}%)`}
			></input>
		</div>
	);
};

export default Preview;
