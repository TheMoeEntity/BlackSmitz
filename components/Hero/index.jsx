"use client";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "750px",
  };
  const slideImages = [
    {
      url: "/images/h5-1.jpeg",
      caption: "Slide 1",
    },
    {
      url: "/images/h5-2.jpeg",
      caption: "Slide 2",
    },
  ];
  return (
    <div className={styles.hero}>
      <div className="slide-container">
        <Slide
          arrows={false}
          infinite={true}
          duration={`7000`}
          transitionDuration={`400`}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className={styles.sect}
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
              <div className={styles.caption}>
                <strong>INDUSTRIAL SERVICES</strong>
                <h1>BlackSmitz Manufacturing Company Service Solutions</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptates eius quae iure sint? Distinctio, fugiat. Nihil,
                  neque temporibus lorem and lorem and some more?
                </p>
                <button>DISCOVER MORE</button>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
