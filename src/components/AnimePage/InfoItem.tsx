import React, {FC} from 'react';
import Tooltip from "../Tooltip";

interface AnimeInfoItemProps {
    name: string,
    description: string,
    tooltipText?: string,
}

const InfoItem: FC<AnimeInfoItemProps> = ({name, description, tooltipText}) => {


    return (
        <div className={"info-item"}>
            <p className={"info-names"}>{name}</p>
            <div className={"info-description"}>
                <p className={"info-descriptions"}>{description}</p>
                {/*{tooltipText && <Tooltip tooltipText={tooltipText}/>}*/}
            </div>
        </div>
    );
};

export default InfoItem;