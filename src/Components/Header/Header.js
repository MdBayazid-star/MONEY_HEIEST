import React from "react";
import "./Header.css";
import logo from "./../../Images/763-7636590_money-heist-logo-png-transparent-png.png";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img className="headerLogo" src={logo} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="/navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active text"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      More List
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-danger" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
