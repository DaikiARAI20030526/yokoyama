import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css"; // CSSモジュールをインポート

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img src="img/main_logo.svg" className={styles.logo} alt="Main Logo" />
      </Link>
    </div>
  );
};

export default Header;
