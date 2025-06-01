// src/components/Top.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Top.module.css";

const images = [
  {
    front: "img/TONGARI正面.jpg",
    back: "img/TONGARI成分表.jpg",
    hover: "img/TONGARI正面（色うす）.jpg",
  },
  {
    front: "img/TONGARI正面.jpg",
    back: "img/TONGARI成分表.jpg",
    hover: "img/TONGARI正面（色うす）.jpg",
  },
  {
    front: "img/TONGARI正面.jpg",
    back: "img/TONGARI成分表.jpg",
    hover: "img/TONGARI正面（色うす）.jpg",
  },
];

const Top = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={styles.topMain}>
      {images.map((img, index) => {
        const isHovered = hoveredIndex === index;
        const anyHovered = hoveredIndex !== null;

        return (
          <Link
            key={index}
            to="/products"
            className={styles.imageContainer}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {isHovered ? (
              <>
                {/* ホバーされた場合、frontとbackを横並びで表示 */}
                <img
                  className={styles.image}
                  src={img.front}
                  alt="TONGARI Front"
                  style={{ width: "50%" }}
                />
                <img
                  className={styles.image}
                  src={img.back}
                  alt="TONGARI Back"
                  style={{ width: "50%" }}
                />
              </>
            ) : anyHovered ? (
              // 他のアイテムには hover 画像を表示
              <img
                className={styles.image}
                src={img.hover}
                alt="TONGARI Hover"
                style={{ width: "100%" }}
              />
            ) : (
              // どれもホバーされていないときは front を表示
              <img
                className={styles.image}
                src={img.front}
                alt="TONGARI Front"
                style={{ width: "100%" }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Top;
