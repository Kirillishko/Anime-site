import React, {FC, useState} from 'react';

interface RangeInputProps {
    firstPointValue: number,
    secondPointValue: number,
}

const SliderInput:FC<RangeInputProps> = ({firstPointValue, secondPointValue}) => {

    const [firstPoint, setFirstPoint] = useState(firstPointValue);
    const [secondPoint, setSecondPoint] = useState(secondPointValue);

    return (
        <div className={"slider-input"}>
            {firstPoint}.{secondPoint}
            <input type={"range"} min={firstPointValue}
                   max={secondPoint} value={firstPoint}
                   onChange={(e) => setFirstPoint(prevState => Number(e.target.value))}
                   className={"slider-input-1"}/>
            <input type={"range"} min={firstPointValue}
                   max={secondPointValue} value={secondPoint}
                   onChange={(e) => setSecondPoint(prevState => Number(e.target.value))}
                   className={"slider-input-2"}/>
        </div>
    );
};

export default SliderInput;