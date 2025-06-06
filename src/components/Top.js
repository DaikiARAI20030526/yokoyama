// src/components/Top.js
import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  // ウィンドウサイズ変更を監視して、450px 以下かどうかを判定
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={styles.topMain}>
      {images.map((img, index) => {
        // 450px 以下では常に front のみをレンダリング
        if (isMobile) {
          return (
            <Link
              key={index}
              to="/products"
              className={styles.imageContainer}
              // モバイルでは hover イベントを使わないので onMouseEnter/Leave は設定しない
            >
              <img
                className={styles.image}
                src={img.front}
                alt="TONGARI Front"
                style={{ width: "100%" }}
              />
            </Link>
          );
        }

        // それ以外（451px 以上）は、従来どおりホバー判定を行う
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
                {/* ホバーされたアイテム：front と back を横並びで表示 */}
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
              /* ほかのアイテム：hover 用の “薄め” 画像を表示 */
              <img
                className={styles.image}
                src={img.hover}
                alt="TONGARI Hover"
                style={{ width: "100%" }}
              />
            ) : (
              /* まだ何もホバーしていない状態：front を表示 */
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
