// src/components/News.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { microcmsClient } from '../lib/microcmsClient';
import styles from '../styles/News.module.css';

const toArray = x => (Array.isArray(x) ? x : x ? [x] : []);

export default function News() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // 必要なフィールドのみ取得
        const res = await microcmsClient.getList({
          endpoint: 'news',
          queries: {
            limit: 100,
            orders: '-publishedAt',
            fields: [
              'slug',
              'publishedAt',
              'news.title',
              'news.url',
            ].join(','),
          },
        });

        // レスポンスを確認（開発時だけ）
        console.log('news contents:', res.contents);

        // ネストされた news 配列をフラット化し、最新5件を抽出
        const all = (res.contents || []).flatMap(({ slug, publishedAt, news }) =>
          toArray(news).map(block => ({
            slug,
            title: block.title || '',
            url:   block.url   || '',
            date:  publishedAt,
          }))
        );

        const sorted = all.sort((a, b) => new Date(b.date) - new Date(a.date));
        setItems(sorted.slice(0, 5));
      } catch (e) {
        console.error('[microCMS]', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>読み込み中…</p>;
  if (!items.length) return <p>お知らせはありません</p>;

  return (
    <>
      {/* 新しく追加した見出し */}
      <div>
        <p className={styles.newstitle}>お知らせ</p>
      </div>

      <div className={styles.newsList}>
        {items.map(({ slug, title, url, date }) => {
          const d = new Date(date);
          const dateString = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
          return (
            <div key={`${slug}-${date}`} className={styles.newsdiv}>
              <div className={styles.left}>{dateString}</div>
              <div className={styles.right}>
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                ) : (
                  <Link to={`/news/${slug}`}>{title}</Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
