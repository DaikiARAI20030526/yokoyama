import React from "react";
import styles from "../styles/Slider.module.css"; // CSSモジュールの適用

const videos = [
  { src: "img/01.png", url: "https://www.youtube.com/shorts/aIrM_DWt9no" },
  { src: "img/02.png", url: "https://www.youtube.com/shorts/XmbYk6ey3NM" },
  { src: "img/04.png", url: "https://www.youtube.com/shorts/m1aWeQN4MzE" },
  { src: "img/05.png", url: "https://youtube.com/shorts/UI0s9zQw6M8?si=uVzoQoSmZtweTC-F" },
  { src: "img/06.png", url: "https://youtube.com/shorts/B60-9uFr04w?si=muYEtAzjjIC0XW2v" },
  { src: "img/07.png", url: "https://youtube.com/shorts/37GWEeQ3oa0?si=R05UDid_6iugl0aS" },
  { src: "img/08.png", url: "https://youtube.com/shorts/dbIoLiw672U?si=P4oTLCIwkAkmhgxA" },
  { src: "img/09.png", url: "https://youtube.com/shorts/aQ6rfU5KzNc?si=JgdBe-ddx4Im3HUv" },
];

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.scrollInfinityWrap}>
        {[...Array(2)].map((_, i) => (
          <ul key={i} className={`${styles.scrollInfinityList} ${styles.scrollInfinityListRight}`}>
            {videos.map((video, index) => (
              <li key={index} className={styles.scrollInfinityItem}>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={video.src} alt={`Thumbnail ${index + 1}`} />
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Slider;
