import React from "react";
import styles from "../styles/Copy.module.css"; // CSSモジュールをインポート

const Copy = () => {
  return (
<p className={styles.copy} style={{ marginBottom: "36px" }}>
  かけて！煮て！<br />
  混ぜて！焼いて！<br />
  漬けて！炊いて！<br />
  YOKOYAMAは<span className={styles.break}><br /></span>万能ソースの専門メーカーです。
</p>

  );
};

export default Copy;
//