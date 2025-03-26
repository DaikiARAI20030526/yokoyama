import React from 'react'
import "../styles.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div><div className="footer">
  <div className="left-content">
    <div className="left-container">
      <div className="goods">
      <Link to="/products">TONGARI</Link>
        <a href="TORIPAI.html">TORIPAI</a>
        {/* <a href=""> */} {/* <a> KOMUTAN</a> */}
      </div>
      <div className="rank">
        <p>1</p>
        {/* <p>3</p> */}
        {/* <p>2</p> */}

        
      </div>
    </div>
    <div className="about-com">
      {/* <div className="about-goods"> */}
      {/* <p>商品について</p> */}
      {/* <a href="">Pure</a> */}
      {/* <a href="">生マスタード</a> */}
      {/* </div>  */}
      <div className="com-sns">
        <div className="nav">
          <p>会社について</p>
          <Link to="/company#header">代表挨拶</Link>
          <Link to="/company#company-info">会社概要</Link>
          <Link to="/contact">お問合せ</Link>
        </div>

        <div className="SNS">
          <div className="youtube">
            <a href="https://www.youtube.com/@TONGARI_sauce">
              <img src="img/youtube_icon.png" alt="" />
            </a>
          </div>
          <div className="X">
            <a href="https://x.com/tongari_tare">
              <img src="img/X_icon.png" alt="" />
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/tongari_yokoyama/?locale=zh-hans">
              <img src="img/insta_icon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="cominfo">
    <p className="comname">
      株式会社YOKOYAMA<br />
      〒169-0051<br />
      東京都新宿区西早稲田3-1-6-402
    </p>
  </div>
</div>

<footer>
  <div className="footer-text">
    <div className="copyright">
      <h3>©YOKOYAMA INC.</h3>
    </div>
    <div className="back">
      <a href="#">ページTOPへ</a>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer