import React, { useState } from "react";
import "./Header.css";
import Bars from "../../assets/bars.png"
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="About"
              span={true}
              smooth={true}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Footer"
              span={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="products"
              span={true}
              smooth={true}
            >
              Products
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
