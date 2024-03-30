import React from "react";
import Navcss from "../css/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className={Navcss.main}>
      <h1 className={Navcss.brand}>Stitched</h1>
      <div className={Navcss.main2}>
        <ul className={Navcss.option}>
          <li>Home</li>
          <li>Wishlist</li>
          <li>Cart</li>
        </ul>
        <FontAwesomeIcon icon={faCircleUser} className={Navcss.icon} />
      </div>
    </div>
  );
};

export default Navbar;
