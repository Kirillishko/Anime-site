import React, {FC} from 'react';

interface AnimeInfoItemProps {
    name: string,
    description: string,
}

const AnimeInfoItem: FC<AnimeInfoItemProps> = ({name, description}) => {
    return (
        <div className={"info-item"}>
            <p className={"info-names"}>{name}</p>
            <p className={"info-descriptions"}>{description}</p>
        </div>
    );
};

export default AnimeInfoItem;