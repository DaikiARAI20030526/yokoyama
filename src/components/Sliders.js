import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sliders.module.css';

// 画面サイズに応じた設定を持つ
const groupConfigs = [
  {
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.jpg',
        desktop: { angle: 45, width: '13.5%', left: '20%', top: '0%' },
        mobile: { angle: 20, width: '30%', left: '20%', top: '15%' },
      },
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        desktop: { angle: -40, width: '13.5%', left: '62%', top: '-8%' },
        mobile: { angle: -20, width: '30%', left: '60%', top: '15%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        desktop: { angle: 140, width: '12.5%', left: '20%', top: '0%' },
        mobile: { angle: 140, width: '30%', left: '10%', top: '15%' },
      },
      {
        to: '/tongari',
        img: '/img/TONGARI正面.jpg',
        desktop: { angle: 200, width: '12.5%', left: '60%', top: '0%' },
        mobile: { angle: -150, width: '40%', left: '65%', top: '15%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.jpg',
        desktop: { angle: 245, width: '12.5%', left: '68%', top: '15%' },
        mobile: { angle: 210, width: '100vw', left: '25%', top: '30%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        desktop: { angle: 198, width: '12%', left: '40%', top: '0%' },
        mobile: { angle: 198, width: '100vw', left: '25%', top: '25%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.jpg',
        desktop: { angle: 75, width: '12.5%', left: '19%', top: '-10%' },
        mobile: { angle: 55, width: '100vw', left: '35%', top: '5%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        desktop: { angle: 220, width: '12%', left: '74%', top: '0%' },
        mobile: { angle: 200, width: '100vw', left: '25%', top: '5%' },
      },
    ],
  },
];

export default function Sliders() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % groupConfigs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentGroup = groupConfigs[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        {currentGroup.items.map((bottle, idx) => {
          const config = isMobile ? bottle.mobile : bottle.desktop;

          return (
            <Link to={bottle.to} key={idx} className={styles.link}>
              <img
                src={bottle.img}
                alt="Bottle"
                className={styles.image}
                style={{
                  transform: `rotate(${config.angle}deg)`,
                  width: config.width,
                  position: 'absolute',
                  left: config.left,
                  top: config.top,
                }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
