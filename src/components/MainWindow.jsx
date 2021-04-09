import React from "react";

export class MainWindow extends React.Component{
    render() {
        return (
            <div className="hero-wrap" style={{backgroundImage: "url('images/bg_1.jpg')"}}
                 data-stellar-background-ratio="0.5">
                <div className="overlay">
                </div>
                <div className="overlay-2">
                </div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center">
                        <div className="col-md-7 ftco-animate d-flex align-items-end">
                            <div className="text w-100">
                                <h1 className="mb-4">Save Your Precious Time &amp; Outsource Daily Tasks</h1>
                                <p className="mb-4">A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia.</p>
                                <p>
                                    <a href="#" className="btn btn-primary py-3 px-4">Request Our Assistant</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mouse">
                    <a href="#" className="mouse-icon">
                        <div className="mouse-wheel">
                            <span className="fa fa-chevron-down">
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}