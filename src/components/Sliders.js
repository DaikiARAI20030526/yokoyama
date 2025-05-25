// src/components/Sliders.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sliders.module.css';

const bottles = [
  { to: '/tongari',  img: '/img/tongari-front.png',  className: 'bottle1' },
  { to: '/toripai',  img: '/img/toripai-front.png',  className: 'bottle2' },
  { to: '/tongari',  img: '/img/tongari-front.png',  className: 'bottle3' },
  { to: '/toripai',  img: '/img/toripai-front.png',  className: 'bottle4' },
  { to: '/tongari',  img: '/img/tongari-front.png',  className: 'bottle5' },
  { to: '/toripai',  img: '/img/toripai-front.png',  className: 'bottle6' },
  { to: '/tongari',  img: '/img/tongari-front.png',  className: 'bottle7' },
  { to: '/toripai',  img: '/img/toripai-front.png',  className: 'bottle8' },
];

export default function Sliders() {
  // 複製して無限スクロール
  const items = [...bottles, ...bottles];

  return (
    <div className={styles.slider}>
      <ul className={styles.wrap}>
        {items.map((bottle, idx) => (
          <li key={idx} className={styles.item}>
            <Link to={bottle.to}>
              <img
                src={bottle.img}
                className={styles[bottle.className]}
                alt="Bottle"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
