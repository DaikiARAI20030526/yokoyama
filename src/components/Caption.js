import React from 'react';
import styles from "../styles/Caption.module.css"; // CSSモジュールの適用

const Caption = () => {
  return (
    <div className={styles.caption}>
      <div className={styles.goodsinfo}>
        <div className={styles.title}>
          <h1>TONGARI</h1>
          <h2>豚骨ニンニクドレッシングアンドソース</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.price}>
            メーカー希望小売価格<br />
            650円（税込）
          </p>
          <div className={styles.buttonSection}>
            <div className={styles.button}>
              <button onClick={() => window.location.href='https://www.amazon.co.jp/%E3%83%A8%E3%82%B3%E3%83%A4%E3%83%9E-TONGARI-%E8%B1%9A%E9%AA%A8%E3%83%8B%E3%83%B3%E3%83%8B%E3%82%AF%E3%83%89%E3%83%AC%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%EF%BC%86%E3%82%BD%E3%83%BC%E3%82%B9/dp/B0CFQF1MZZ'}>
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