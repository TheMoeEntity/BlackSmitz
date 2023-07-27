"use client";
import styles from "./index.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import man from "../../public/images/tm1.jpeg";
import man2 from "../../public/images/tm2.jpeg";
import ma3 from "../../public/images/tm3.jpeg";
import ma4 from "../../public/images/tm4.jpeg";
import ma5 from "../../public/images/tm5.jpeg";
import ma6 from "../../public/images/tm6.jpeg";
import Image from "next/image";

const Team = () => {
  const assets = [
    {
      name: "Moses Nwigberi",
      dept: "Architecture",
      img: man,
    },
    {
      name: "Moses Nwigberi",
      dept: "Architecture",
      img: man2,
    },
    {
      name: "Moses Nwigberi",
      dept: "Architecture",
      img: ma3,
    },
    {
      name: "Moses Nwigberi",
      dept: "Architecture",
      img: ma4,
    },
    {
      name: "Moses Nwigberi",
      dept: "Architecture",
      img: ma5,
    },
    {
      name: "Moses Nwigberi",
      dept: "Architecture",
      img: ma6,
    },
  ];
  return (
    <div className={styles.team}>
      <div className={styles.title}>
        <span>Team Members</span>
        <h2>
          Meet with our expert <span>Team</span>
        </h2>
      </div>
      <div style={{ margin: "0px 100px" }}>
        <Slide
          transitionDuration={"400"}
          duration={"7000"}
          slidesToScroll={3}
          slidesToShow={3}
          indicators={false}
          arrows={false}
          className={styles.slider}
        >
          {assets.map((x, i) => (
            <div key={i} className={styles.slides}>
              <div className={styles.imgs}>
                <Image
                  src={x.img}
                  objectFit="cover"
                  alt="testimonial-image"
                  fill={true}
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.tab}>
                <strong>{x.name}</strong>
                <span>{x.dept}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Team;
