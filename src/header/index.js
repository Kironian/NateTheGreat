import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, logoimage, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 768);

  const handleToggle = () => {
    setActive(prevActive => !prevActive);
    document.body.classList.toggle("ovhidden");
  };

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          
        <Link className="navbar-brand nav_ac" to="/">
  <img src={logoimage} alt="Nate The Great logo" />
</Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            {isDesktop ? (
              <ul className="desktop__menu d-none d-md-flex">
                <li className="menu_item">
                  <Link to="/" className="my-3">
                    Home
                  </Link>
                </li>
                <li className="menu_item">
                  <Link to="/portfolio" className="my-3">
                    Portfolio
                  </Link>
                </li>
                <li className="menu_item">
                  <Link to="/about" className="my-3">
                    About
                  </Link>
                </li>
                <li className="menu_item">
                  <Link to="/contact" className="my-3">
                    Contact
                  </Link>
                </li>
              </ul>
            ) : (
              <button
                className="menu__button nav_ac d-md-none"
                onClick={handleToggle}
              >
                {!isActive ? <VscGrabber /> : <VscClose />}
              </button>
            )}
          </div>
        </div>

        <div
          className={`site__navigation ${
            isActive ? "menu__opend" : ""
          }`}
        >
          <button className="close__button" onClick={handleToggle}>
            <VscClose />
          </button>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/contact"
                      className="my-3"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu_footer d-flex flex-column flex">
            <div className="d-flex">
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">
              copyright __ {logotext}
            </p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;

