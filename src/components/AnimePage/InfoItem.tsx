import React, {FC} from 'react';

interface AnimeInfoItemProps {
    name: string,
    description: string,
    type : "information" | "rating";
}

const InfoItem: FC<AnimeInfoItemProps> = ({name, description, type}) => {
    if (type == "information") {
        return (
            <div className={"info-item"}>
                <p className={"info-names"}>{name}</p>
                <p className={"info-descriptions"}>{description}</p>
            </div>
        );
    } else {
        return (
            <div className={"info-item"}>
                <p className={"rating-names"}>{name}</p>
                <p className={"rating-descriptions"}>{description}</p>
            </div>
        );
    }
};

export default InfoItem;