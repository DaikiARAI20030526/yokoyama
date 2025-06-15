import React from 'react';
import styles from "../styles/Tcaption.module.css"; // CSSモジュールの適用

const Caption = () => {
  return (
    <div className={styles.caption}>
      <div className={styles.goodsinfo}>
        <div className={styles.title}>
          <h1>TORIPAI</h1>
          <h2>白湯ドレッシングアンドソース</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.price}>
            メーカー希望小売価格<br />
            650円（税込）
          </p>
          <div className={styles.buttonSection}>
            <div className={styles.button}>
              <button onClick={() => window.location.href='https://amzn.asia/d/151c0pa'}>
                購入する
              </button>
              <p>amazon.comへ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caption;
// CSSモジュールの適用