import React, {FC} from 'react';
import "../styles/tooltip.css"

interface TooltipProps {
    text: string,
    tip: string,
    className: string,
}

const Tooltip:FC<TooltipProps> = ({text, tip, className}) => {
    return (
        <div className={"tooltip"}>
            <p className={className}>{text}</p>
            <span className={"tooltipText"}>{tip}</span>
        </div>
    );
};

export default Tooltip;