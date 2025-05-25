// src/components/BottleBottom.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/BottleBottom.module.css';

const BottleBottom = () => (
  <div className={styles.bottleBottom}>
    <div className={styles.imgContainer}>
      <Link to="/tongari">
        <img src="/img/tongari-front.png" alt="" />
      </Link>
      <Link to="/toripai">
        <img src="/img/toripai-front.png" alt="" />
      </Link>
    </div>
  </div>
);

export default BottleBottom;
