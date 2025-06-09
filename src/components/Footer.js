// Footer.jsx
import React from 'react';
import styles from "../styles/Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        {/* ← 左端：商品リンク＆rank（変更なし） */}
        <div className={styles.leftcontent}>
          <div className={styles.leftcontainer}>
            <div className={styles.goods}>
              <Link to="/products">TONGARI</Link>
              <a href="TORIPAI.html">TORIPAI</a>
            </div>
            <div className={styles.rank}>
              <div className={styles.rankItem}>
                <img
                  className={styles.rotated}
                  src="img/TONGARI正面.jpg"
                  alt="TONGARI 正面"
                />
                <img
                  className={styles.front}
                  src="img/TONGARI成分表.jpg"
                  alt="TONGARI 成分表"
                />
              </div>
              <div className={styles.rankItem}>
                <img
                  className={styles.rotated}
                  src="img/TONGARI正面.jpg"
                  alt="TONGARI 正面"
                />
                <img
                  className={styles.front}
                  src="img/TONGARI成分表.jpg"
                  alt="TONGARI 成分表"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ← ここから新規ラッパー。aboutcom と cominfo を横並びに */}
        <div className={styles.footercominfo}>
          <div className={styles.aboutcom}>
            <p>商品について</p>
            <a
              href="https://retailer.orosy.com/wholesale/c210c4eb-1197-4f5b-bb32-b673e6005b9b"
              target="_blank"
              rel="noopener noreferrer"
            >
              バイヤーの方はこちら
            </a>
            <Link to="/tyogo">レシピはこちら</Link>
          </div>
          <div className={styles.comsns}>
              <div className={styles.nav}>
                <p>会社について</p>
                <Link to="/company#header">代表挨拶</Link>
                <Link to="/company#company-info">会社概要</Link>
                <Link to="/contact">お問合せ</Link>
              </div>
              <div className={styles.SNS}>
                <div className={styles.youtube}>
                  <a href="https://www.youtube.com/@TONGARI_sauce">
                    <img src="img/youtube_icon.png" alt="" />
                  </a>
                </div>
                <div className={styles.X}>
                  <a href="https://x.com/tongari_tare">
                    <img src="img/X_icon.png" alt="" />
                  </a>
                </div>
                <div className={styles.instagram}>
                  <a href="https://www.instagram.com/tongari_yokoyama/?locale=zh-hans">
                    <img src="img/insta_icon.png" alt="" />
                  </a>
                </div>
              </div>
            </div>

          <div className={styles.cominfo}>
            <p>本社</p>
            <p>株式会社YOKOYAMA</p>
            <p>〒169-0051</p>
            <p>東京都新宿区西早稲田3-1-6-402</p>
            <p>支社</p>
            <p>〒101-0061</p>
            <p>東京都千代田区神田三崎3-6-1</p>
            <p>BACH2F 008</p>
          </div>
        </div>
        {/* ↑ ここまでラッパー */}
      </div>

      <footer>
        <div className={styles.footertext}>
          <div className={styles.copyright}>
            <h3>©YOKOYAMA INC.</h3>
          </div>
          <div className={styles.back}>
            <a href="#Top">ページTOPへ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
