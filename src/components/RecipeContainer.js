// src/components/RecipeContainer.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { microcmsClient } from '../lib/microcmsClient'
import styles from '../styles/RecipeContainer.module.css'

const toArray = x => (Array.isArray(x) ? x : x ? [x] : [])

export default function RecipeContainer() {
  const [blocks, setBlocks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await microcmsClient.getList({
          endpoint: 'recipes',
          queries: {
            limit: 100,
            orders: '-publishedAt',
            fields: [
              'id',
              'slug',
              'recipes2.title.title',
              'recipes2.title.dressing',
              'recipes2.title.dressing.symbol',
              'recipes2.img.url',
              'recipes2.hoverimg.hoverimg',
              'recipes2.hoverimg.hovertext',
            ].join(','),
          },
        })
        setBlocks(
          (res.contents || []).flatMap(({ id, slug, recipes2 }) =>
            toArray(recipes2).map(block => ({ id, slug, block }))
          )
        )
      } catch (e) {
        console.error('[microCMS]', e)
        setError(true)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <p>読み込み中…</p>
  if (error) return <p>エラーが発生しました</p>

  // 古い順 (配列の最初が古い) のまま左右に振り分け
  const leftItems  = blocks.filter((_, i) => i % 2 === 0)
  const rightItems = blocks.filter((_, i) => i % 2 === 1)

  const renderItem = (item, idx, side) => {
    const { id, slug, block } = item
    const titleBlk      = toArray(block.title)[0] || {}
    const titleText     = titleBlk.title || ''
    const dressingItems = toArray(titleBlk.dressing).map(d => ({
      text:   toArray(d.dressing).join('、'),
      symbol: toArray(d.symbol).join('、'),
    }))
    const imgUrl   = block.img?.url || ''
    const hoverBlk = toArray(block.hoverimg)[0] || {}
    const hoverUrl = hoverBlk.hoverimg?.url || ''
    const hoverText= hoverBlk.hovertext || ''

    return (
      <div key={`${id}-${side}-${idx}`} className={styles.recipe}>
        <Link to={`/tyogo/${slug}`} className={styles.link}>
          <div className={styles.imgContainer}>
            <img src={imgUrl || '/no-image.png'} alt={titleText} className={styles.img} />
            {hoverUrl && (
              <div className={styles.hoverImg}>
                <img src={hoverUrl} alt={hoverText || titleText} className={styles.img} />
              </div>
            )}
          </div>
          <h3 className={styles.title}>{titleText}</h3>
          {dressingItems.length > 0 && (
            <ul className={styles.dressing}>
              {dressingItems.map(({ text, symbol }, i) => (
                <li key={i}>
                  {text}
                  {symbol && <span className={styles.symbol}>{symbol}</span>}
                </li>
              ))}
            </ul>
          )}
        </Link>

        {/* 右列：4個ごとにとんがりボトル */}
        {side === 'right' && (idx + 1) % 4 === 0 && (
          <img src="/img/tongari_botle.png" alt="" className={styles.extraImg} />
        )}
        {/* 左列：7個ごとにトリパイ */}
        {side === 'left' && (idx + 1) % 7 === 0 && (
          <img src="/img/toripai-front.png" alt="" className={styles.extraImg} />
        )}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {leftItems.map((item, idx) => renderItem(item, idx, 'left'))}
        </div>
        <div className={styles.right}>
          {rightItems.map((item, idx) => renderItem(item, idx, 'right'))}
        </div>
      </div>
    </div>
  )
}
