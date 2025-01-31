import React from "react";

export const Footer = () => {

    return (
        <div className="fixed-bottom">
            <footer className="align-items-center border-bottom border-top d-flex flex-wrap justify-content-between my-4 py-3 text-bg-light">
                <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>
                <p className="text-body-secondary fst-italic mb-0">
                    Made by{" Pedro"}
                    , with
                    love <i className="fa fa-heart text-danger"></i>!
                </p>
                {/* <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                </a> */}
                <ul className="nav col-md-4 justify-content-end me-2">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
            </footer>
        </div>
    )
}