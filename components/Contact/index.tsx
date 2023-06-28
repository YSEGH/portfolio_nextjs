import React, { useEffect, useRef } from "react";
import style from "./style/index.module.css";
import global from "../../css/global.module.css";
import FormElement from "./Form";
import cx from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const fields = [
  {
    blockName: "text",
    blockType: "text",
    id: "JIDSQ98",
    label: "Name",
    name: "name",
    required: true,
    width: 50,
  },
  {
    blockName: "text",
    blockType: "text",
    id: "JIDSQ95",
    label: "Address Email",
    name: "email",
    required: true,
    width: 50,
  },
  {
    blockName: "text",
    blockType: "textarea",
    id: "JIDSQ91",
    label: "Message",
    name: "message",
    required: true,
    width: 100,
  },
];

const form = {
  id: "IDSQ90",
  customClass: "form__contact",
  fields: fields,
  confirmationMessage: "any",
  submitButtonLabel: "Submit",
};

const index = () => {
  const formText = useRef(null);

  const animateText = (elem, index) => {
    gsap.to(elem, {
      y: 0,
      delay: index * 0.2,
      ease: "expo",
      overwrite: "auto",
    });
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils
      .toArray(".translate__reveal_contact")
      .forEach(function (elem: any, index: number) {
        ScrollTrigger.create({
          trigger: elem,
          once: true,
          onEnter: function () {
            animateText(elem, index);
          },
          onLeave: function () {},
        });
      });
    return () => {};
  }, []);

  return (
    <div id="contact" className={cx(global.container)}>
      <div className={cx(global.content, style.contact)}>
        <h6>
          <span className={cx("translate__reveal_contact")}>
            Want to talk about a project ?
          </span>{" "}
          <br />
        </h6>
        <h6>
          <span className={cx("translate__reveal_contact")}>
            {" "}
            Please get in touch with using the form below.
          </span>
        </h6>
        <FormElement form={form} />
      </div>
    </div>
  );
};

export default index;
