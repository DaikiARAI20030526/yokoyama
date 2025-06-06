import React from "react";
import styles from "../styles/Copy.module.css"; // CSSモジュールをインポート

const Copy = () => {
  return (
    <p className={styles.copy} style={{ marginBottom: "36px" }}>
      かけて！煮て！<br />
      混ぜて！焼いて！<br />
      漬けて！炊いて！<br />
      YOKOYAMAは
      {/* 既存の1300px以下で改行させる部分 */}
      <span className={styles.break}>
        <br />
      </span>
      万能ソースの
      {/* こちらが600px以下でだけ改行を表示する部分 */}
      <span className={styles.mobileBreak}>
        <br />
      </span>
      専門メーカーです。
    </p>
  );
};

export default Copy;
