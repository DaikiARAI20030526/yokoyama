import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sliders.module.css';

// 画面サイズに応じた設定を持つ
const groupConfigs = [
  {
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.png',
        desktop: { angle: 45, width: '194px', left: '20%', top: '0%' },
        mobile: { angle: 50, width: '156px', left: '10%', top: '15%' },
      },
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        desktop: { angle: -40, width: '194px', left: '62%', top: '-8%' },
        mobile: { angle: -20, width: '156px', left: '60%', top: '15%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        desktop: { angle: 140, width: '180px', left: '20%', top: '0%' },
        mobile: { angle: 140, width: '150px', left: '-10%', top: '-20%' },
      },
      {
        to: '/tongari',
        img: '/img/TONGARI正面.png',
        desktop: { angle: 220, width: '175px', left: '62%', top: '0%' },
        mobile: { angle: -150, width: '140px', left: '75%', top: '20%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.png',
        desktop: { angle: 245, width: '180px', left: '68%', top: '15%' },
        mobile: { angle: 210, width: '156px', left: '25%', top: '10%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        desktop: { angle: 198, width: '173px', left: '40%', top: '0%' },
        mobile: { angle: 210, width: '156px', left: '65%', top: '3%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/tongari',
        img: '/img/TONGARI正面.png',
        desktop: { angle: 75, width: '180px', left: '19%', top: '-10%' },
        mobile: { angle: 55, width: '156px', left: '5%', top: '5%' },
      },
    ],
  },
  {
    items: [
      {
        to: '/toripai',
        img: '/img/toripai-front.png',
        desktop: { angle: 220, width: '173px', left: '74%', top: '0%' },
        mobile: { angle: 200, width: '156px', left: '20%', top: '5%' },
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
