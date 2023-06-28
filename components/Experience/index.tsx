import React, { useEffect, useRef } from "react";
import style from "./style/index.module.css";
import global from "../../css/global.module.css";
import cx from "classnames";
import { inter } from "../../utilities/fonts";
import { useParallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const index = () => {
  const parallax = useParallax<HTMLDivElement>({
    speed: -10,
  });
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
      .toArray(".translate__reveal_experience")
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
    <div id="experience" className={style.experience}>
      <div className={cx(style.experience__banner)} ref={parallax.ref}></div>
      <div className={cx(global.container)}>
        <div className={cx(global.content, style.experience__content)}>
          <div ref={triggerRef} className={cx(style.text__content)}>
            <h6 className={cx(inter.className, "translate__reveal_experience")}>
              Experience
            </h6>
            <p
              className={cx(
                inter.className,
                "translate__reveal_experience",
                "translate__from_left"
              )}
            >
              Phasellus a est. <span>Phasellus magna</span>. Integer ante arcu,
              accumsan a, consectetuer eget, posuere ut, mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
