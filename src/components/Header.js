// src/components/Header.js
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src="/img/main_logo.svg"
          className={styles.logo}
          alt="Main Logo"
        />
      </Link>
    </header>
  )
}
