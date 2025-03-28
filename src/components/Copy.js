import React from "react";
import styles from "../styles/Copy.module.css"; // CSSモジュールをインポート

const Copy = () => {
  return (
    <p className={styles.copy} style={{ marginBottom: "36px" }}>
      かけて！煮て！<br />
      混ぜて！焼いて！<br />
      漬けて！炊いて！
    </p>
  );
};

export default Copy;
//