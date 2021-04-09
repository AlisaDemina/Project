import React from "react";

export class Proceduce extends React.Component{
    render() {
        return (
            <section className="ftco-section ftco-no-pb bg-light">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Proceduce</span>
                            <h2>How It Works</h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex align-items-stretch ftco-animate">
                            <div className="services-2">
                                <span className="number">01</span>
                                <h2>Handling <br/>The Task</h2>
                                <div className="text">
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences
                                        fly into your mouth.</p>
                                    <span className="icon flaticon-loan">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-stretch ftco-animate">
                            <div className="services-2 active">
                                <span className="number">02</span>
                                <h2>Creating <br/>To-Do List</h2>
                                <div className="text">
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences
                                        fly into your mouth.</p>
                                    <span className="icon flaticon-document">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-stretch ftco-animate">
                            <div className="services-2">
                                <span className="number">03</span>
                                <h2>Schedule <br/>A Meeting</h2>
                                <div className="text">
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences
                                        fly into your mouth.</p>
                                    <span className="icon flaticon-fast">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}