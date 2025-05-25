// Tyogo.jsx
import React from 'react';
import styles from './tyogo.module.css';

const Tyogo = () => {
  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.text}>
          <a href="/">
            <img src="img/main_logo.svg" alt="logo" className={styles.logo} />
          </a>
          <p className={styles.title}>ヨコヤマ調合室</p>
        </div>
      </header>

      <div className={styles.slider}>
        <div className={styles['scroll-infinity__wrap']}>
          <div className={styles.first}>
            <ul className={`${styles['scroll-infinity__list']} ${styles['scroll-infinity__list--right']}`}>
              {['bottle1','bottle2','bottle3','bottle4','bottle5','bottle6','bottle7','bottle8'].map((bottle, idx) => (
                <li key={idx} className={styles['scroll-infinity__item']}>
                  <a href={idx % 2 === 0 ? './tongari.html' : './TORIPAI.html'}>
                    <img
                      src={`img/${idx % 2 === 0 ? 'tongari-front.png' : 'toripai-front.png'}`}
                      alt=""
                      className={styles[bottle]}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.second}>
            <ul className={`${styles['scroll-infinity__list']} ${styles['scroll-infinity__list--right']}`}>
              {['bottle1','bottle2','bottle3','bottle4','bottle5','bottle6','bottle7','bottle8'].map((bottle, idx) => (
                <li key={idx} className={styles['scroll-infinity__item']}>
                  <a href={idx % 2 === 0 ? './tongari.html' : './TORIPAI.html'}>
                    <img
                      src={`img/${idx % 2 === 0 ? 'tongari-front.png' : 'toripai-front.png'}`}
                      alt=""
                      className={styles[bottle]}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottle}>
        <a href="./tongari.html">
          <img src="img/tongari-front.png" alt="" />
        </a>
        <a href="./TORIPAI.html">
          <img src="img/toripai-front.png" alt="" />
        </a>
      </div>

      <div className={styles.today}>
        <div className={styles['today-title']}>
          <p>今日のレシピ</p>
        </div>
        <div className={styles['today-container']}>
          <a href="./recipe.html">
            <div className={styles['today-img-container']}>
              <img src="img/recipe-1.jpg" alt="" />
            </div>
          </a>
          <div className={styles['today-text-container']}>
            <div className={styles['today-left']}>
              <p className={styles['today-name']}>鶏白湯お茶漬け</p>
              <p className={styles['today-caption']}>TORIPAI</p>
            </div>
            <div className={styles['today-right']}>
              <a href="">
                <p className={styles['go-recipe']}>レシピを見る→</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['recipe-container']}>
        <div className={styles['recipe-list-title']}>
          <p>レシピ一覧</p>
        </div>
        <div className={styles.recipelist-warpper}>
          {[
            { href: './recipe.html', img: 'recipe-1.jpg', hover: '大さじ2', title: '鶏白湯お茶漬け', caption: 'TORIPAI' },
            { href: './recipe2.html', img: 'recipe-2.jpg', hover: '大さじ1', title: '鶏白湯あんかけ炒飯', caption: 'TORIPAI' },
            { href: './recipe3.html', img: 'recipe-3.jpg', hover: '大さじ3', title: '鶏白湯スープカレー', caption: 'TORIPAI' },
            { href: './recipe4.html', img: 'recipe-4.jpg', hover: '大さじ3', title: '鶏白湯の冷やし中華', caption: 'TORIPAI' },
            { href: './recipe5.html', img: 'recipe-5.jpg', hover: '大さじ2', title: '蒸し鶏の鶏白湯薬味だれ', caption: 'TORIPAI' },
            { href: './recipe6.html', img: 'recipe-6.jpg', hover: '200ml', title: '鶏白湯スープで作る、濃厚水炊き', caption: 'TORIPAI' },
            { href: './recipe7.html', img: 'recipe-8.jpg', hover: '100ml', title: '鶏白湯スープで作る、絶品ラーメン', caption: 'TORIPAI' }
          ].map((item, idx) => (
            <div key={idx} className={styles.recipe}>
              <a href={item.href}>
                <div className={styles['recipe-img-container']}>
                  <img src={`img/${item.img}`} alt="" className={styles.img} />
                  <div className={styles['hover-img']}>
                    <img src="img/toripai-front.png" alt="" />
                  </div>
                  <div className={styles['hover-text']}>{item.hover}</div>
                </div>
              </a>
              <div className={styles['recipe-text-container']}>
                <div className={styles['recipe-title']}>{item.title}</div>
                <div className={styles['recipe-caption']}>{item.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['bottle-bottom']}>
        <div className={styles['bottle-img-container']}>
          <a href="">
            <img src="img/tongari-front.png" alt="" />
          </a>
          <a href="">
            <img src="img/toripai-front.png" alt="" />
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles['left-content']}>
          <div className={styles['left-container']}>
            <div className={styles.goods}>
              <a href="tongari.html">TONGARI</a>
              <a href="TORIPAI.html">TORIPAI</a>
            </div>
            <div className={styles.rank}><p>1</p></div>
          </div>
          <div className={styles['about-com']}>
            <div className={styles.nav}>
              <p>会社について</p>
              <a href="company.html#header">代表挨拶</a>
              <a href="company.html#company-info">会社概要</a>
              <a href="contact.html">お問合せ</a>
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
        <div className={styles.cominfo}>
          <p className={styles.comname}>株式会社YOKOYAMA<br />〒169-0051<br />東京都新宿区西早稲田3-1-6-402</p>
        </div>
      </div>

      <footer>
        <div className={styles['footer-text']}>
          <div className={styles.copyright}> <h3>©YOKOYAMA INC.</h3> </div>
          <div className={styles.back}><a href="#">ページTOPへ</a></div>
        </div>
      </footer>
    </>
  );
};

export default Tyogo;