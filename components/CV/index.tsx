import React, { useEffect } from "react";
import style from "./style/index.module.css";
import global from "../../css/global.module.css";
import { inter } from "../../utilities/fonts";
import Granim from "granim";
import cx from "classnames";

const index = () => {
  useEffect(() => {
    new Granim({
      element: "#curriculum__item__capgemini",
      direction: "diagonal",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#EAB395", "#EFAFF6", "#4FB5F1", "#97DCDA", "#F5B28B", "#F0A8FA"],
            ["#F97676", "#F7FF96", "#BDF14F", "#AAF885", "#F3A761", "#FBF562"],
            ["#68EFD7", "#BAF371", "#53F4BA", "#CF68F3", "#EFCF5F", "#73F1EA"],
          ],
          transitionSpeed: 10000,
        },
      },
    });
    return () => {};
  }, []);

  return (
    <div className={style.curriculum__items}>
      <div className={style.curriculum__item}>
        <canvas id="curriculum__item__capgemini"></canvas>
        <div className={cx(global.container)}>
          <div className={cx(style.curriculum__item__content)}>
            <div className={style.item__time}>
              <h4 className={inter.className}>Now</h4>
            </div>
            <div className={style.item__job}>
              <h4 className={inter.className}>Software engineer</h4>
              <p className={inter.className}>Capgemini</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
