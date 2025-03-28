import React from 'react'
import styles from '../styles/Companyinfo.module.css';  // CSS Modulesをインポート

const Companyinfo = () => {
  return (
    <div className={styles["companyinfo"]}>
      <h1>会社情報</h1>
      <div className={styles.yokoyama}>
        <p className={styles.yokoyama2}>株式会社YOKOYAMA</p>
        <p className={styles.yokoyama3}>名称</p>
      </div>
      <div className={styles.place}>
        <p className={styles.place2}>
          〒169-0051<br />
          東京都新宿区西早稲田3-1-6-402
        </p>
        <p className={styles.place3}>所在地</p>
      </div>
      <div className={styles.date}>
        <p className={styles.date2}>2022年1月11日</p>
        <p className={styles.date3}>設立</p>
      </div>
      <div className={styles.project}>
        <p className={styles.project2}>
          食品の卸売業<br />
          加工食品の企画、販売
        </p>
        <p className={styles.project3}>事業内容</p>
      </div>
      <div className={styles.bank}>
        <p className={styles.bank2}>
          西武信用金庫<br />
          GMOあおぞらネット銀行
        </p>
        <p className={styles.bank3}>取引先銀行</p>
      </div>
    </div>
  )
}

export default Companyinfo
