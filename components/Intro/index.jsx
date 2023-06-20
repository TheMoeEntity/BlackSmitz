"use client";
import styles from "./index.module.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import icon4 from "../../public/images/4.png";
import icon5 from "../../public/images/5.png";
import icon6 from "../../public/images/6.png";

const Intro = () => {
  const assets = [
    {
      img: icon1,
      title: "Rigging",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, id ea iure tenetur molestias eius?",
    },
    {
      img: icon2,
      title: "Piping",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, id ea iure tenetur molestias eius?",
    },
    {
      img: icon3,
      title: "Wood Crating",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, id ea iure tenetur molestias eius?",
    },
    {
      img: icon4,
      title: "General Repair",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, id ea iure tenetur molestias eius?",
    },
    {
      img: icon5,
      title: "Electric Tower",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, id ea iure tenetur molestias eius?",
    },
    {
      img: icon6,
      title: "Steel Fabrication",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, id ea iure tenetur molestias eius?",
    },
  ];
  return (
    <div className={styles.abouts}>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: "/images/service-bg2.jpeg", speed: -30 }]}
          className={`aspect-[2/1] ${styles.banner}`}
        >
          <div className={styles.grid}>
            {assets.map((x, i) => (
              <div key={i}>
                <div className={styles.icon}>
                  <Image
                    src={x.img}
                    objectFit="cover"
                    alt="card-image"
                    fill
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div>
                  <strong>{x.title}</strong>
                </div>

                <div>
                  <p>{x.note}</p>
                </div>
              </div>
            ))}
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
      <div className={styles.projects}>
        dsds
      </div>
    </div>
  );
};

export default Intro;
