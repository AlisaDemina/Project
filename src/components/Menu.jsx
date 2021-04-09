import React from "react";
import {NavLink} from "react-router-dom";

export class Menu extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Virtual Assistant</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu">
                        </span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/howItWorks" className="nav-link">How It Works</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pricing" className="nav-link">Pricing Plans</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}