import React from "react"
import photo1 from "../static/img/nat-1-large.jpg"
import photo2 from "../static/img/nat-2-large.jpg"
import photo3 from "../static/img/nat-3-large.jpg"


const Main = () => {
    return (
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Ecxiting tours for adventurous people.
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall iin love with nature </h3>
                        <p className="paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall iin love with natur </h3>
                        <p className="paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>

                    <a href="" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={photo1} alt="photo1" className="composition__photo composition__photo--p1"/>
                            <img src={photo2} alt="photo2" className="composition__photo composition__photo--p2"/>
                            <img src={photo3} alt="photo3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;