import React from 'react'
import styles from '../styles/Company.module.css';  // CSS Modulesをインポート

const Company = () => {
  return (
    <div className={styles['comtitle']}>  {/* stylesオブジェクトを使用 */}
      <h1>
        自分が常習的にできている事でも、<br />
        人に教えることは難しい<br />
        それはきっと。料理も同じ。
      </h1>
      <div className={styles.name}>  {/* stylesオブジェクトを使用 */}
        <p>代表ご挨拶　横山淳一</p>
      </div>
    </div>
  )
}

export default Company
