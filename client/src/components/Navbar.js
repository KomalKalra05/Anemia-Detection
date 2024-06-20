import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const RenderMenu = () => {
    return (
      <>
        <li>
          <a className="na" href="/">Login</a>
        </li>
        <li>
          <a className="na1" href="/register">Register</a>
        </li>
      </>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h3>Hematology Web Lab</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-menu">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
