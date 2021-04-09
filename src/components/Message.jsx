import React from "react";

export class Message extends React.Component{
    render() {
        return (
            <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img"
                     style={{backgroundimage: "url('images/bg_2.jpg')"}}>
                <div className="overlay">
                </div>
                <div className="container">
                    <div className="row d-md-flex justify-content-end">
                        <div className="col-md-12 col-lg-6 half p-3 py-5 pl-lg-5 ftco-animate">
                            <h2 className="mb-4">Send a Message &amp; Get in touch!</h2>
                            <form action="#" className="appointment">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="form-field">
                                                <div className="select-wrap">
                                                    <div className="icon">
                                                        <span className="fa fa-chevron-down">
                                                        </span>
                                                    </div>
                                                    <select name="" id="" className="form-control">
                                                        <option value="">Assistant Purpose</option>
                                                        <option value="">Familty Task</option>
                                                        <option value="">Online Research</option>
                                                        <option value="">Management Task</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="" id="" cols="30" rows="7" className="form-control"
                                                      placeholder="Message">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="submit" value="Send message"
                                                   className="btn btn-primary py-3 px-4"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}