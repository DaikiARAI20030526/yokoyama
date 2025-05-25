// src/components/Headers.js
import React from 'react';
import styles from '../styles/Headers.module.css';

const Headers = () => (
  <header className={styles.header} id="headers">
    <div className={styles.text}>
      {/* <a href="/">
        <img
          src="/img/main_logo.svg"
          className={styles.logo}
          alt="Logo"
        />
      </a> */}
      <p className={styles.title}>ヨコヤマ調合室</p>
    </div>
  </header>
);

export default Headers;
