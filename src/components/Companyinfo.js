import React from 'react'
import "../company.css";
const Companyinfo = () => {
  return (
    <div id="company-info">
      <h1>会社情報</h1>
      <div className="yokoyama">
        <p className="yokoyama2">株式会社YOKOYAMA</p>
        <p className="yokoyama3">名称</p>
      </div>
      <div className="place">
        <p className="place2">
          〒169-0051<br />
          東京都新宿区西早稲田3-1-6-402
        </p>
        <p className="place3">所在地</p>
      </div>
      <div className="date">
        <p className="date2">2022年1月11日</p>
        <p className="date3">設立</p>
      </div>
      <div className="project">
        <p className="project2">
          食品の卸売業<br />
          加工食品の企画、販売
        </p>
        <p className="project3">事業内容</p>
      </div>
      <div className="bank">
        <p className="bank2">
          西武信用金庫<br />
          GMOあおぞらネット銀行
        </p>
        <p className="bank3">取引先銀行</p>
      </div>
    </div>
  )
}

export default Companyinfo