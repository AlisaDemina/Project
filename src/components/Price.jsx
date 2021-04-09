import React from "react";

export class Price extends React.Component{
    render() {
        return (
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Price &amp; Plans</span>
                            <h2>Affordable Packages</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="block-7">
                                <div className="text-center">
                                    <span className="price"><sup>$</sup> <span
                                        className="number">49</span> <sub>/mo</sub></span>
                                    <span className="excerpt d-block">Small Plan</span>
                                    <ul className="pricing-text mb-5">
                                        <li><span className="fa fa-check mr-2">
                                        </span>Upto 50 hours Monthly</li>
                                        <li><span className="fa fa-check mr-2">
                                        </span>2 Assistants available</li>
                                    </ul>

                                    <a href="#" className="btn btn-primary d-block px-2 py-2">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="block-7">
                                <div className="text-center">
                                    <span className="price"><sup>$</sup> <span
                                        className="number">79</span> <sub>/mo</sub></span>
                                    <span className="excerpt d-block">Startup Plan</span>
                                    <ul className="pricing-text mb-5">
                                        <li><span className="fa fa-check mr-2">
                                        </span>Upto 50 hours Monthly</li>
                                        <li><span className="fa fa-check mr-2">
                                        </span>2 Assistants available</li>
                                    </ul>

                                    <a href="#" className="btn btn-primary d-block px-2 py-2">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="block-7">
                                <div className="text-center">
                                    <span className="price"><sup>$</sup> <span
                                        className="number">109</span> <sub>/mo</sub></span>
                                    <span className="excerpt d-block">Medium Plan</span>
                                    <ul className="pricing-text mb-5">
                                        <li><span className="fa fa-check mr-2">
                                        </span>Upto 50 hours Monthly</li>
                                        <li><span className="fa fa-check mr-2">
                                        </span>2 Assistants available</li>
                                    </ul>

                                    <a href="#" className="btn btn-primary d-block px-2 py-2">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="block-7">
                                <div className="text-center">
                                    <span className="price"><sup>$</sup> <span
                                        className="number">149</span> <sub>/mo</sub></span>
                                    <span className="excerpt d-block">Commercial Plan</span>
                                    <ul className="pricing-text mb-5">
                                        <li><span className="fa fa-check mr-2">
                                        </span>Upto 50 hours Monthly</li>
                                        <li><span className="fa fa-check mr-2">
                                        </span>2 Assistants available</li>
                                    </ul>

                                    <a href="#" className="btn btn-primary d-block px-2 py-2">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}