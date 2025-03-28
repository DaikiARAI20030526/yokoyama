import React from 'react'
import styles from '../styles/Companyimg.module.css';  // CSS Modulesをインポート

const Companyimg = () => {
  return (
    <div className={styles.ceoimage}>  {/* stylesオブジェクトを使用 */}
      <img src="img/ceo-image2.jpg" alt="代表横山の画像" />
    </div>
  )
}

export default Companyimg
