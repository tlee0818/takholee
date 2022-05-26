import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import thl_profile from "../../assets/thl_profile.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tak-Ho Lee</h1>
        <h4 className="text-light">
          CMU Senior, Software Engineer, Learner
        </h4>

        <CTA />
        <HeaderSocials />

        <div className="my-photo">
          <img src={thl_profile} alt="Picture of Tak-Ho Lee" />

          <a href="#contacts" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
