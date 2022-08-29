import { useState } from "react";
import useWindowDimensions from "../dimensionsHook.js";

export const Navigation = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { height } = useWindowDimensions();

  document.addEventListener("scroll", () => {
    setScrollPosition(window.scrollY);
  });

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top navbarContainer">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            className={"navbar-brand page-scroll title " + (scrollPosition > height - 50 ? "dark-text" : "white-text")}
            href="#page-top"
          >
            Taylor Ann Scott Foundation
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#about"
                className={"nav-bar-options page-scroll " + (scrollPosition > height - 50 ? "dark-text" : "white-text")}
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={"nav-bar-options page-scroll " + (scrollPosition > height - 50 ? "dark-text" : "white-text")}
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={"nav-bar-options page-scroll " + (scrollPosition > height - 50 ? "dark-text" : "white-text")}
              >
                Mission Statement
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={"nav-bar-options page-scroll " + (scrollPosition > height - 50 ? "dark-text" : "white-text")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
