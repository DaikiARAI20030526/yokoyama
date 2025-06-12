// src/components/ProductContainer.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { microcmsClient } from '../lib/microcmsClient';
import styles from '../styles/ProductContainer.module.css';

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await microcmsClient.getList({
          endpoint: 'products',
          queries: {
            limit: 100,
            fields: ['slug', 'title', 'img.url'].join(','),
          },
        });
        setProducts(res.contents || []);
      } catch (e) {
        console.error('[microCMS]', e);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>読み込み中…</p>;
  if (error)   return <p>エラーが発生しました</p>;

  return (
    <>
      {/* 追加部分: ドレッシング見出し */}
      <div className={styles.titlesection}>
        <p>ドレッシング</p>
      </div>

      <div className={styles.container}>
        {products.map(({ slug, title, img }) => (
          <Link
            key={slug}
            to={`/products/${slug}`}
            className={styles.productItem}
          >
            <img
              src={img?.url || '/no-image.png'}
              alt={title}
              className={styles.productImg}
            />
            <p className={styles.productTitle}>{title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
