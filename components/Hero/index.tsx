import React, { useEffect, useRef } from "react";
import style from "./style/index.module.css";
import cx from "classnames";
import { inter } from "../../utilities/fonts";
import { useParallax } from "react-scroll-parallax";
import Granim from "granim";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const index = () => {
  const heroText = useRef(null);
  const parallax: any = useParallax({
    speed: -100,
  });

  const animateText = () => {
    gsap.to(heroText.current, {
      y: 0,
      delay: 0.25,
      ease: "expo",
      overwrite: "auto",
    });
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    new Granim({
      element: "#hero__banner",
      direction: "diagonal",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#F97676", "#F7FF96", "#BDF14F", "#AAF885", "#F3A761", "#FBF562"],
            ["#68EFD7", "#BAF371", "#53F4BA", "#CF68F3", "#EFCF5F", "#73F1EA"],
            ["#EAB395", "#EFAFF6", "#4FB5F1", "#97DCDA", "#F5B28B", "#F0A8FA"],
          ],
          transitionSpeed: 10000,
        },
      },
    });
    return () => {};
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: heroText.current,
      onEnter: function () {
        animateText();
      },
      onLeave: function () {},
    });
  }, []);

  return (
    <div className={style.hero}>
      <canvas
        id="hero__banner"
        className={cx(style.hero__banner)}
        ref={parallax.ref}
      ></canvas>
      <div className={cx(style.hero__content)}>
        <h1 ref={heroText} className={cx(inter.className)}>
          I create websites.
        </h1>
      </div>
    </div>
  );
};

export default index;
