import React, { useEffect, useRef, useState } from "react";
import style from "../style/index.module.css";
import cx from "classnames";
import { gsap } from "gsap";
import throttle from "lodash.throttle";
import { useParallax } from "react-scroll-parallax";

const Banner = () => {
  const parallaxSpeed = -10;
  const parallaxBack = useParallax<HTMLDivElement>({
    speed: parallaxSpeed,
  });

  const parallaxFront = useParallax<HTMLDivElement>({
    speed: parallaxSpeed,
  });

  const hero = useRef(null);
  const mousePosY = useRef(0);
  const display = useRef(false);
  const maskSize = 1.1;

  const onMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mousePosY.current = clientY;
    const scrollTop = hero.current
      ? hero.current.getBoundingClientRect().top
      : 0;
    const heroHeight = hero.current ? hero.current.offsetHeight : 0;
    const posY = scrollTop * -1 + clientY;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((posY / heroHeight) * 100);
    const percentSize = y > 50 ? 100 - y : y;
    let spaceBottom = Math.round(((percentSize / 100) * heroHeight) / maskSize);

    if ((y < 10 && y > 0) || (y > 90 && y < 100)) {
      spaceBottom = spaceBottom - 10;
    }
    if ((y < 5 && y > 0) || (y > 95 && y < 100)) {
      spaceBottom = spaceBottom - 5;
    }

    gsap.to(hero.current, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    });

    gsap.to(hero.current, {
      "--maskSize1": `${spaceBottom}px`,
      duration: 0.5,
      ease: "back.out(2)",
    });
  };

  const onScroll = () => {
    if (display.current === true) {
      const scrollTop = hero.current
        ? hero.current.getBoundingClientRect().top
        : 0;
      const posY = scrollTop * -1 + mousePosY.current;
      const heroHeight = hero.current ? hero.current.offsetHeight : 0;
      const y = Math.round((posY / heroHeight) * 100);
      const percentSize = y > 50 ? 100 - y : y;
      let size = Math.round(((percentSize / 100) * heroHeight) / maskSize);

      if ((y < 10 && y > 0) || (y > 90 && y < 100)) {
        size = size - 10;
      }
      if ((y < 5 && y > 0) || (y > 95 && y < 100)) {
        size = size - 5;
      }

      gsap.to(hero.current, {
        "--y": `${y}%`,
        duration: 0.5,
        ease: "sine.out",
      });

      gsap.to(hero.current, {
        "--maskSize1": `${size}px`,
        duration: 0.5,
        ease: "back.out(2)",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", throttle(onMouseMove, 100));
    window.addEventListener("scroll", throttle(onScroll, 100));
    return () => {};
  }, []);

  return (
    <div className={cx(style.banner__container)}>
      <div ref={hero} className={cx(style.banner, style.banner__front)}>
        <div
          className={cx(style.banner__image, style.banner__front__image)}
          ref={parallaxFront.ref}
        ></div>
        <div className={cx(style.banner__text, style.banner__front__text)}>
          Chill
        </div>
      </div>
      <div className={cx(style.banner, style.banner__back)}>
        <div
          className={cx(style.banner__image, style.banner__back__image)}
          ref={parallaxBack.ref}
        ></div>
        <div className={cx(style.banner__text, style.banner__back__text)}>
          Work
        </div>
      </div>
    </div>
  );
};

export default Banner;
