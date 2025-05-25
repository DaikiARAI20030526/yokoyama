// src/components/Bottle.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Bottle.module.css';  // ← モジュールを読み込む

const Bottle = () => (
  <div className={styles.bottle}>
    <Link to="/tongari">
      <img
        src="/img/tongari-front.png"
        alt=""
        className={styles.img}    // ← ここで .img を適用
      />
    </Link>
    <Link to="/toripai">
      <img
        src="/img/toripai-front.png"
        alt=""
        className={styles.img}
      />
    </Link>
  </div>
);

export default Bottle;
