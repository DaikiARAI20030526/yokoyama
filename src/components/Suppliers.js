import React from 'react'
import styles from '../styles/Suppliers.module.css';  // CSS Modulesをインポート

const Suppliers = () => {
  return (
    <div className={styles.supplier}>
      <h1>主要取引先企業様</h1>
      <div className={styles["suppliercontent"]}>
        <div className={styles["supplierimg"]}>
          <img src="img/kato logo-img.jpg" alt="Kato Logo" />
          {/* <img src="img/kokubu-img.png" alt="Kokubu Logo" /> */}
          <img src="img/g7-img.png" alt="G7 Logo" />
          <img src="img/kamei-img.png" alt="Kamei Logo" />
          <img src="img/nexco-img.png" alt="Nexco Logo" />
        </div>
        <div className={styles["suppliername"]}>
          <p>
            <span className={styles.S_span}>三菱食品株式会社/</span>
            <span className={styles.S_span}>三井物産株式会社/</span>
            <span className={styles.S_span}>カメイ株式会社/</span>
            <span className={styles.S_span}>加藤産業株式会社/</span>
            <span className={styles.S_span}>西日本高速道路株式会社/</span>
            <span className={styles.S_span}>国分グループ本社株式会社/</span>
            <span className={styles.S_span}>株式会社G7ジャパンフードサービス</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Suppliers
