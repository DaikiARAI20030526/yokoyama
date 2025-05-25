// src/components/Today.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Today.module.css';

const Today = () => {
  // 今日の日付を取得・整形
  // const now = new Date();
  // const year = now.getFullYear();
  // const month = now.getMonth() + 1;    // 0始まり→+1
  // const date = now.getDate();
  // const formattedDate = `${year}年${month}月${date}日`;

  return (
    <div className={styles.today}>
      {/* <div className={styles.date}>
        <p>{formattedDate}</p>
      </div>

      <div className={styles.title}>
        <p>今日のレシピ</p>
      </div> */}

      {/* 画像リンク */}
      <Link to="/recipe/1">
        <div className={styles.imgContainer}>
          <img
            src="/img/recipe-1.jpg"
            alt=""
            className={styles.image}
          />
        </div>
      </Link>

      {/* テキスト部分 */}
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.left}>
            <p className={styles.name}>鶏白湯お茶漬け</p>
            <p className={styles.caption}>TORIPAI</p>
          </div>
          <div className={styles.right}>
            <Link to="/recipe/1">
              <p className={styles.go}>レシピを見る→</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
