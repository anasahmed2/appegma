import React, { useState } from "react";
import "./styles.css";
import { Button1, Button3, Button4 } from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
function Navbar({children}) {
  const [toggle, setToggle] = useState(false);
  return (<>
    <div className="NavContainer">
      <div className="navSection">
        <div className="navLogo">
          <img src="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/evenbigger.svg" />
        </div>
        <div className="navLinks">
          <ul className="navlinksStyle">
            <li>How We Work</li>
            <li>Designers</li>
            <li>Designers</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>
              <div className="navBtnPrimary">
                <Button4 value="Join Our Pool" />
              </div>
            </li>
          </ul>
        </div>
        <div className="NavBtn">
          <div className="navBtnSecondary">
            <Button4 value="Hire Now" />
          </div>
          <div className="navToggle">
            <div onClick={() => setToggle(!toggle)} className="navToggle_w">
              {toggle ? (
                <GiHamburgerMenu className="navToggleStyle" />
              ) : (
                <ImCross className="navToggleStyle" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="screen">{children}</div>
    </>
  );
}

export default Navbar;
