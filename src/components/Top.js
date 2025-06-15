// src/components/Top.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Top.module.css";

const images = [
  {
    front: "img/TONGARI正面.jpg",
    back:  "img/TONGARI成分表.jpg",
    hover: "img/TONGARI正面（色うす）.jpg",
    path:  "/tongari",   // ← 追加
  },
  {
    front: "img/TORIPAI正面.jpg",
    back:  "img/TORIPAI正面.jpg",
    hover: "img/TORIPAI正面.jpg",
    path:  "/toripai",   // ← 追加
  },
];

const MOBILE_BREAKPOINT = 540;

const Top = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const onResize = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={styles.topMain}>
      {images.map((img, idx) => {
        // モバイル時は front のみ & リンク先も img.path に
        if (isMobile) {
          return (
            <Link
              key={idx}
              to={img.path}
              className={styles.imageContainer}
            >
              <img
                className={styles.image}
                src={img.front}
                alt={`${idx === 0 ? "TONGARI" : "TORIPAI"} Front`}
                style={{ width: "100%" }}
              />
            </Link>
          );
        }

        // デスクトップ時のホバー挙動
        const isHovered = idx === hoveredIndex;
        const anyHovered = hoveredIndex !== null;

        return (
          <Link
            key={idx}
            to={img.path}                      // ← ここも動的に
            className={styles.imageContainer}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {isHovered ? (
              <>
                <img
                  className={styles.image}
                  src={img.front}
                  alt={`${idx === 0 ? "TONGARI" : "TORIPAI"} Front`}
                  style={{ width: "50%" }}
                />
                <img
                  className={styles.image}
                  src={img.back}
                  alt={`${idx === 0 ? "TONGARI" : "TORIPAI"} Back`}
                  style={{ width: "50%" }}
                />
              </>
            ) : anyHovered ? (
              <img
                className={styles.image}
                src={img.hover}
                alt={`${idx === 0 ? "TONGARI" : "TORIPAI"} Hover`}
                style={{ width: "100%" }}
              />
            ) : (
              <img
                className={styles.image}
                src={img.front}
                alt={`${idx === 0 ? "TONGARI" : "TORIPAI"} Front`}
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
