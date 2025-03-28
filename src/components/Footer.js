import React from 'react';
import styles from "../styles/Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.leftcontent}>
          <div className={styles.leftcontainer}>
            <div className={styles.goods}>
              <Link to="/products">TONGARI</Link>
              <a href="TORIPAI.html">TORIPAI</a>
              {/* <a href=""> */} {/* <a> KOMUTAN</a> */}
            </div>
            <div className={styles.rank}>
              <p>1</p>
              {/* <p>3</p> */}
              {/* <p>2</p> */}
            </div>
          </div>
          <div className={styles.aboutcom}>
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
          </div>
        </div>
        <div className={styles.cominfo}>
          <p className={styles.comname}>
            株式会社YOKOYAMA<br />
            〒169-0051<br />
            東京都新宿区西早稲田3-1-6-402
          </p>
        </div>
      </div>
      <footer>
        <div className={styles.footertext}>
          <div className={styles.copyright}>
            <h3>©YOKOYAMA INC.</h3>
          </div>
          <div className={styles.back}>
            <a href="#">ページTOPへ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;