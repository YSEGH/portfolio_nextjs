import React, { useEffect, useRef } from "react";
import style from "./style/index.module.css";
import global from "../../css/global.module.css";
import { inter } from "../../utilities/fonts";
import Stack from "./components/Stack";
import cx from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Banner from "./components/Banner";

const index = () => {
  const triggerRef = useRef(null);

  function animateFrom(elem, direction = null) {
    direction = direction || 1;
    var x = 0,
      y = direction * 100;
    if (elem.classList.contains("translate__from_left")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("translate__from_right")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils
      .toArray(".translate__reveal_about")
      .forEach(function (elem: any) {
        ScrollTrigger.create({
          trigger: elem,
          once: true,
          onEnter: function () {
            animateFrom(elem);
          },
          onLeave: function () {},
        });
      });
    return () => {};
  }, []);

  return (
    <div id="about" className={style.wrapper__about}>
      <div id="about_me" className={cx(global.container)}>
        <div
          ref={triggerRef}
          className={cx(global.content, style.what_about_me__container)}
        >
          <h6 className={cx(inter.className, "translate__reveal_about")}>
            about me
          </h6>
          <p
            className={cx(
              inter.className,
              "translate__from_left",
              "translate__reveal_about"
            )}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut.
          </p>
        </div>
      </div>
      <Banner />

      <div id="what_i_do" className={cx(global.container)}>
        <div className={cx(global.content, style.what_i_do__container)}>
          <div className={style.text__content}>
            <h6 className={cx(inter.className, "translate__reveal_about")}>
              What I do
            </h6>
            <ul
              className={cx(
                inter.className,
                "translate__from_left",
                "translate__reveal_about"
              )}
            >
              <li>Blog. </li>
              <li>Portfolio.</li>
              <li>
                E<span>commerce</span>.
              </li>
              <li>What ever you want.</li>
            </ul>
          </div>
          {/* <div
            className={cx("translate__from_right", "translate__reveal_about")}
          >
            <Stack />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default index;
