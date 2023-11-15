import React, { FC } from "react";
import "../styles/tooltip.css";

interface TooltipProps {
	tooltipText: string;
	isActive: boolean;
}

const Tooltip: FC<TooltipProps> = ({ tooltipText, isActive }) => {
	const className = isActive ? "tooltip" : "tooltip active";

	return (
		<div className={className}>
			<p>{tooltipText}</p>
		</div>
	);
};

export default Tooltip;
