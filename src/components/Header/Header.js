import React from "react"
import logo from '../../static/img/logo-white.png'

const Header = (props) => {
    console.log(logo)
    return (
        <div className="header">
            <div className="logo-box">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">OUTDOORS</span>
                    <span className="heading-primary-sub">IS WHERE LIFE HAPPENS</span>
                </h1>
            </div>
        </div>
    );
}

export default Header;