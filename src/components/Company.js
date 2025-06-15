// src/components/Company.jsx
import React from 'react';
import styles from '../styles/Company.module.css';

const Company = () => {
  return (
    <div className={styles.companyWrapper}>
      {/* 左側：タイトルと名前 */}
      <div className={styles.comtitle}>
        <h1>
          自分が常習的にできている事でも、人に教えることは難しいそれはきっと。料理も同じ。
        </h1>

        </div>
    </div>
  );
};

export default Company;