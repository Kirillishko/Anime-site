import React, {FC} from 'react';
import "../styles/tooltip.css"

interface TooltipProps {
    text: string,
    tip: string,
}

const Tooltip:FC<TooltipProps> = ({text, tip}) => {
    return (
        <div className={"tooltip"}>
            <p>{text}</p>
            <span className={"tooltipText"}>{tip}</span>
        </div>
    );
};

export default Tooltip;