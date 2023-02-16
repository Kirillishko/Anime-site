import React from 'react';

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"subHeader"}>
                <div className={"leftSubHeader"}>
                    {/*<img src={"https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-98.jpg"}/>*/}
                    <h1>NiBeNiMe</h1>
                    <p>Главная</p>
                    <p>Поиск</p>
                </div>
                <div className={"rightSubHeader"}>
                    <img src={"https://ru.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png"}/>
                    <img src={"https://static.tildacdn.com/tild3239-6335-4262-a363-643061376534/kisspng-computer-ico.png"}/>
                </div>
            </div>
        </div>
    );
};

export default Header;