import React from "react";

export class VirtualAsServiceEnd extends React.Component{
    render() {
        return (
            <section className="ftco-section ftco-no-pb ftco-no-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
                             style={{backgroundImage: "url('images/about-1.jpg')"}}>
                        </div>
                        <div className="col-md-6 wrap-about pl-md-5 ftco-animate py-md-5">
                            <div className="heading-section">
                                <h2 className="mb-4">Get Your Own Highly Skilled Virtual Assistant.</h2>

                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                                    into your mouth.</p>
                                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came
                                    from it would have been rewritten a thousand times and everything that was left from
                                    its origin would be the word "and" and the Little Blind Text should turn around and
                                    return to its own, safe country.</p>
                            </div>

                            <div className="row progress-circle my-5">
                                <div className="col-lg-6 mb-4">
                                    <div className="bg-white">
                                        <div className="progress mx-auto" data-value='30'>
					          <span className="progress-left">
                      <span className="progress-bar border-primary">
                      </span>
					          </span>
                                            <span className="progress-right">
                      <span className="progress-bar border-primary">
                      </span>
					          </span>
                                            <div
                                                className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                <div className="h2 font-weight-bold">30<sup className="small">%</sup>
                                                </div>
                                            </div>
                                        </div>

                                        <h2 className="h5 font-weight-bold text-center mt-3">Regular Office
                                            Employee</h2>

                                    </div>
                                </div>

                                <div className="col-lg-6 mb-4">
                                    <div className="bg-white">

                                        <div className="progress mx-auto" data-value='75'>
					          <span className="progress-left">
                      <span className="progress-bar border-primary">
                      </span>
					          </span>
                                            <span className="progress-right">
                      <span className="progress-bar border-primary">
                      </span>
					          </span>
                                            <div
                                                className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                <div className="h2 font-weight-bold">75<sup className="small">%</sup>
                                                </div>
                                            </div>
                                        </div>

                                        <h2 className="h5 font-weight-bold text-center mt-3">Virtual Assistant
                                            Employee</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}