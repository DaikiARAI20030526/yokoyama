import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Top.module.css"; // CSSモジュールをインポート

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
  return (
    <div className={styles.topMain}>
      {images.map((img, index) => (
        <Link key={index} to="/products" className={styles.imageContainer}>
          <img className={styles.frontSide} src={img.front} alt="TONGARI Front" />
          <img className={styles.backSide} src={img.back} alt="TONGARI Back" />
          <img className={styles.noHover} src={img.hover} alt="TONGARI Hover" />
        </Link>
      ))}
    </div>
  );
};

export default Top;
//