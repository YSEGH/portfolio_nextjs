import React from "react";
import global from "../../css/global.module.css";
import style from "./style/index.module.css";
import cx from "classnames";
import { inter, leagueGothic } from "../../utilities/fonts";

const index = () => {
  return (
    <div className={cx(global.container__fluid, style.footer)}>
      <div className={style.footer__container}>
        <div
          className={cx(
            style.footer__item,
            style.footer__title,
            leagueGothic.className
          )}
        >
          <h3>
            Full Stack <br /> Web Developer
          </h3>
        </div>
        <div className={cx(style.footer__item, inter.className)}>
          <h6>SEGHROUCHNI Youssef</h6>
          <ul>
            <li>46B rue de la Convention</li>
            <li>44100 Nantes</li>
          </ul>
        </div>
        <div className={cx(style.footer__item, inter.className)}>
          <h6>Contact</h6>
          <ul>
            <li>
              <span>Phone</span> +33 (0)620706551
            </li>
            <li>
              <span>Email</span> ysegh.dev@gmail.com
            </li>
          </ul>
        </div>
        <div className={cx(style.footer__item, inter.className)}>
          <h6>Social</h6>
          <ul>
            <li>
              <a href="">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
