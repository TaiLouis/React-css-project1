import React from "react"
import logo from '../../static/img/logo-white.png'
import "../../sass/main.scss"


const Header = (props) => {
    console.log(logo)
    return (
        <div className="header">
            <div className="header__logo-box">
                <img src={logo} alt="logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">OUTDOORS</span>
                    <span className="heading-primary--sub">IS WHERE LIFE HAPPENS</span>
                </h1>
                <a href="#" className="btn btn--white btn--animation">discover our tour</a>
            </div>
        </div>
    );
}

export default Header;