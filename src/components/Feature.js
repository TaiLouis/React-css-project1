import React from "react"
import { BasicWorld, BasicCompass, BasicHeart, BasisMap } from "../containers/ProjectIcons"


const Feature = (props) => {

    return (
        <React.Fragment>
            <section className="section-fearture">
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <div className="feature-box__icon"><BasicWorld/></div>               
                            <h3 className="heading-tertiary">Explore the wrold</h3>
                            <p className="feature-box__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been</p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <div className="feature-box__icon"><BasicCompass/></div>               
                            <h3 className="heading-tertiary">Explore the wrold</h3>
                            <p className="feature-box__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been</p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <div className="feature-box__icon"><BasicHeart/></div>               
                            <h3 className="heading-tertiary">Explore the wrold</h3>
                            <p className="feature-box__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been</p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <div className="feature-box__icon"><BasisMap/></div>               
                            <h3 className="heading-tertiary">Explore the wrold</h3>
                            <p className="feature-box__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been</p>
                        </div>
                    </div>
                </div>
            </section>
          </React.Fragment>
    );
}

export default Feature;