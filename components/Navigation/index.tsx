import React from "react";
import style from "./style/index.module.css";
import { inter } from "../../utilities/fonts";

const index = () => {
  return (
    <div className={style.navigation}>
      <ul>
        <li>
          <a className={inter.className} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={inter.className} href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className={inter.className} href="#work">
            Work
          </a>
        </li>
        <li>
          <a className={inter.className} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default index;
