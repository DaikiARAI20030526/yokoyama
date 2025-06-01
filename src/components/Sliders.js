// src/components/Sliders.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sliders.module.css';

/**
 * 各グループ・各アイテムごとに
 * - angle: 回転角度
 * - width: 幅
 * - left, top: 画像の配置を数値（CSS値）で指定
 */
const groupConfigs = [
  {
    // Aグループ
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.jpg',
        angle: 45,         // 回転角度
        width: '13.5%',      // 幅
        left: '20%',       // 左からの位置
        top: '0%',         // 上からの位置
      },
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        angle: -40,        // 回転角度
        width: '13.5%',
        left: '62%',
        top: '-8%',
      },
    ],
  },
  {
    // Bグループ
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        angle: 140,
        width: '12.5%',
        left: '20%',
        top: '0%',
      },
      {
        to: '/tongari',
        img: '/img/TONGARI正面.jpg',
        angle: 200,
        width: '12.5%',
        left: '60%',
        top: '0%',
      },
    ],
  },
  {
    // Cグループ
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.jpg',
        angle: 245,
        width: '12.5%',
        left: '68%',
        top: '15%',
      },
    ],
  },
  {
    // Dグループ
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        angle: 198,
        width: '12%',
        left: '40%',
        top: '0%',
      },
    ],
  },
  {
    // Eグループ
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.jpg',
        angle: 75,
        width: '12.5%',
        left: '19%',
        top: '-10%',
      },
    ],
  },
  {
    // Fグループ
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        angle: 220,
        width: '12%',
        left: '74%',
        top: '0%',
      },
    ],
  },
];

export default function Sliders() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 15秒ごとに A→B→C→D→E→F の順で切り替え
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % groupConfigs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentGroup = groupConfigs[currentIndex];

  return (
    <div className={styles.container}>

      <div className={styles.group}>
        {currentGroup.items.map((bottle, idx) => (
          <Link
            to={bottle.to}
            key={idx}
            className={styles.link}
          >
            <img
              src={bottle.img}
              alt="Bottle"
              className={styles.image}
              style={{
                transform: `rotate(${bottle.angle}deg)`,
                width: bottle.width,
                position: 'absolute',
                left: bottle.left,
                top: bottle.top,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
