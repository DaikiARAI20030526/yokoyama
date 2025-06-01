// src/components/Today.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { microcmsClient } from '../lib/microcmsClient';
import styles from '../styles/Today.module.css';

const toArray = x => (Array.isArray(x) ? x : x ? [x] : []);

// 今日の日付を YYYY-MM-DD 形式で返す
const getDateString = (date = new Date()) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(
    date.getDate()
  ).padStart(2,'0')}`;

const STORAGE_KEY = 'todayRecipeData';

export default function Today() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // microCMS からランダムなレシピを取得して localStorage に保存
  const fetchAndStore = async (forDate) => {
    setLoading(true);
    try {
      const res = await microcmsClient.getList({
        endpoint: 'recipes',
        queries: {
          limit: 100,
          fields: [
            'slug',
            'recipes2.title.title',
            'recipes2.title.dressing',
            'recipes2.img.url',
          ].join(','),
        },
      });
      const all = (res.contents || []).flatMap(item => {
        const blocks = toArray(item.recipes2);
        return blocks.map(b => ({
          slug: item.slug,
          titleBlk: toArray(b.title)[0] || {},
          imgUrl: b.img?.url || '',
        }));
      });
      if (all.length === 0) {
        setRecipe(null);
        return;
      }
      const pick = all[Math.floor(Math.random() * all.length)];
      const titleText = pick.titleBlk.title || '';
      const dressingItems = toArray(pick.titleBlk.dressing).map(d =>
        toArray(d.dressing).join('、')
      );
      const dressingText = dressingItems.join('、');

      const newRecipe = {
        slug: pick.slug,
        imgUrl: pick.imgUrl,
        titleText,
        dressingText,
      };
      setRecipe(newRecipe);
      // localStorage に保存
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ date: forDate, recipe: newRecipe })
      );
    } catch (e) {
      console.error(e);
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const today = getDateString();
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const { date, recipe } = JSON.parse(stored);
        if (date === today && recipe) {
          // 当日のデータがあればそのまま使う
          setRecipe(recipe);
          setLoading(false);
        } else {
          // 日付が違う、またはデータなし → 再取得
          fetchAndStore(today);
        }
      } catch {
        fetchAndStore(today);
      }
    } else {
      // 未保存なら取得
      fetchAndStore(today);
    }

    // 翌0時までのミリ秒を計算
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0, 0
    );
    const msToMidnight = nextMidnight - now;

    // 0時に再取得＆保存。以降は24hごと
    const toMidnight = setTimeout(() => {
      const newDate = getDateString();
      fetchAndStore(newDate);
      const daily = setInterval(() => {
        const d = getDateString();
        fetchAndStore(d);
      }, 24 * 60 * 60 * 1000);
      // タイマー解放のために参照を保持
      toMidnight.daily = daily;
    }, msToMidnight);

    return () => {
      clearTimeout(toMidnight);
      if (toMidnight.daily) clearInterval(toMidnight.daily);
    };
  }, []);

  // 表示用の日付
  const now = new Date();
  const formattedDate = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;

  if (loading) return <p>読み込み中…</p>;
  if (!recipe) return <p>レシピが見つかりませんでした</p>;

  return (
    <div className={styles.today}>
      <div className={styles.date}>
        <p>{formattedDate}</p>
      </div>
      <div className={styles.title}>
        <p>今日のレシピ</p>
      </div>

      <Link to={`/recipe/${recipe.slug}`}>
        <div className={styles.imgContainer}>
          <img
            src={recipe.imgUrl}
            alt={recipe.titleText}
            className={styles.image}
          />
        </div>
      </Link>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.left}>
            <p className={styles.name}>{recipe.titleText}</p>
            <p className={styles.caption}>{recipe.dressingText}</p>
          </div>
          <div className={styles.right}>
            <Link to={`/recipe/${recipe.slug}`}>
              <p className={styles.go}>レシピを見る→</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
