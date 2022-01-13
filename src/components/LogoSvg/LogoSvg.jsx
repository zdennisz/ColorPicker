import React from "react";
import { ReactComponent as Chamelleon } from "./../../assets/chamelleon.svg";

const LogoSvg = ({ width, height, fill }) => {
	return <Chamelleon width={width} height={height} fill={fill} />;
};

export default LogoSvg;
