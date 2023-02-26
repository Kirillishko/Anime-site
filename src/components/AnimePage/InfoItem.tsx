import React, {FC} from 'react';
import Tooltip from "../Tooltip";

interface AnimeInfoItemProps {
    name: string,
    nameTip?: string,
    description: string,
    descriptionTip?: string,
    type : "information" | "rating";
}

const InfoItem: FC<AnimeInfoItemProps> = ({name, nameTip,
                                           description, descriptionTip, type}) => {
    if (description == "null")
        return null;

    if (type == "information") {
        return (
            <div className={"info-item"}>
                {nameTip == undefined ? <p className={"info-names"}>{name}</p>
                                      : <Tooltip text={name} tip={nameTip}
                                                 className={"info-names"}/>}
                {descriptionTip == undefined ? <p className={"info-descriptions"}>{description}</p>
                                             : <Tooltip text={description} tip={descriptionTip}
                                                        className={"info-descriptions"}/>}
            </div>
        );
    } else {
        return (
            <div className={"info-item"}>
                {nameTip == undefined ? <p className={"rating-names"}>{name}</p>
                                      : <Tooltip text={name} tip={nameTip}
                                                 className={"rating-names"}/>}
                {descriptionTip == undefined ? <p className={"rating-descriptions"}>{description}</p>
                                      : <Tooltip text={description} tip={descriptionTip}
                                                 className={"rating-descriptions"}/>}
            </div>
        );
    }
};

export default InfoItem;