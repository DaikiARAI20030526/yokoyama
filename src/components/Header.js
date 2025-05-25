// src/components/Header.js
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/Header.module.css'

export default function Header() {
  const location = useLocation()
  const isTyogo = location.pathname.startsWith('/tyogo')

  // 日付取得（tyogo ページのときのみ）
  let formattedDate = ''
  if (isTyogo) {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    formattedDate = `${year}年${month}月${date}日`
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src="/img/main_logo.svg"
          className={styles.logo}
          alt="Main Logo"
        />
      </Link>

      {isTyogo && (
        <div className={styles.today}>
          {/* 日付表示部 */}
          <div className={styles.date}>
            <p>{formattedDate}</p>
          </div>
          {/* タイトル部 */}
          <div className={styles.title}>
            <p>今日のレシピ</p>
          </div>
        </div>
      )}

      {/* …他のナビ等… */}
    </header>
  )
}
