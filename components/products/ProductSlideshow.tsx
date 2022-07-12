import React, { FC } from "react";
import { Slide } from "react-slideshow-image";

import styles from "./ProductSlideshow.module.css";

export const ProductSlideshow = ({ images }) => {
  /* console.log(images.data) */
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.data.map((image) => {
       /*  console.log(image.id) */
        return (
          <div className={styles["each-slide"]} key={image}>
            <div
              style={{
                backgroundImage: `url(${image.attributes.url})`,
                backgroundSize: "cover"
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};
