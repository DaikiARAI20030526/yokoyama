// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { microcmsClient } from '../lib/microcmsClient'
import styles from '../styles/RecipeDetail.module.css'

export default function RecipeDetail() {
  const { slug } = useParams()
  const [recipe, setRecipe]   = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await microcmsClient.getList({
          endpoint: 'recipes',
          queries: {
            filters: `slug[equals]${slug}`,
            fields: [
              'id','slug',
              'recipes2.title.title',
              'recipes2.title.dressing','recipes2.title.dressing.symbol',
              'recipes2.img.url',
              'recipes2.hoverimg.hoverimg','recipes2.hoverimg.hovertext',
              'recipes2.seasoning.seasoning','recipes2.seasoning.count',
              'recipes2.procedure.procedure','recipes2.procedure.count'
            ].join(',')
          }
        })
        setRecipe(res.contents[0])
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [slug])

  if (loading) return <p>読み込み中…</p>
  if (error || !recipe) return <p>レシピが見つかりませんでした</p>

  const block     = Array.isArray(recipe.recipes2) ? recipe.recipes2[0] : recipe.recipes2
  const titleBlk  = Array.isArray(block.title) ? block.title[0] : block.title
  const titleText = titleBlk?.title || ''

  const dressArr = Array.isArray(titleBlk.dressing)
    ? titleBlk.dressing
    : titleBlk.dressing
      ? [titleBlk.dressing]
      : []
  const dressingItems = dressArr.map((d, i) => ({ text: d.dressing, symbol: d.symbol }))

  const mainImgUrl  = block.img?.url
  const hoverBlk    = Array.isArray(block.hoverimg) ? block.hoverimg[0] : block.hoverimg
  const hoverImgUrl = hoverBlk?.hoverimg?.url

  const seasonArr = Array.isArray(block.seasoning)
    ? block.seasoning
    : block.seasoning
      ? [block.seasoning]
      : []

  const procArr = Array.isArray(block.procedure)
    ? block.procedure
    : block.procedure
      ? [block.procedure]
      : []

  return (
    <div className={styles.container}>
      {/* 左カラム */}
      <div className={styles.left}>
        <Link to="/">
          <img
            src="/img/main_logo.svg"
            className={styles.logo}
            alt="Main Logo"
          />
        </Link>

        {mainImgUrl && (
          <img
            src={mainImgUrl}
            alt={titleText}
            className={styles.mainImage}
          />
        )}

        {hoverImgUrl && (
          <div className={styles.hoverWrapper}>
            <h2>使用したドレッシング</h2>
            <img
              src={hoverImgUrl}
              alt={hoverBlk.hovertext || titleText}
              className={styles.hoverImage}
            />
            <ul className={styles.dressingList}>
              {dressingItems.map((item, i) => (
                <li key={i}>
                  {item.text}
                  {item.symbol && (
                    <span className={styles.symbol}>{item.symbol}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 右カラム */}
      <div id="text" className={styles.right}>
        <h1 className={styles.title}>{titleText}</h1>

        {seasonArr.length > 0 && (
          <section className={styles.section}>
            <h2>調味料</h2>
            <ul className={styles.seasoningList}>
              {seasonArr.map((s, i) => (
                <li key={i}>
                  <span className={styles.seasonCount}>{s.count}</span>
                  <span className={styles.seasoningText}>{s.seasoning}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {procArr.length > 0 && (
          <section className={styles.section}>
            <h2>手順</h2>
            <ol className={styles.procedureList}>
              {procArr.map((p, i) => (
                <li key={i}>
                  <span className={styles.procCount}>{p.count}</span>
                  <span className={styles.procedureText}>{p.procedure}</span>
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </div>
  )
}
