import React from 'react';

export class About extends React.Component{
    render() {
        return (
            <section className="hero-wrap hero-wrap-2" style="background-image: url('images/bg_3.jpg');"
                     data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-center">
                        <div className="col-md-9 ftco-animate mb-5 text-center">
                            <h1 className="mb-3 bread">About Us</h1>
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                                className="fa fa-chevron-right"></i></a></span> <span>About us <i
                                className="fa fa-chevron-right"></i></span></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
