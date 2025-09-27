
import React from 'react';
import styles from "../styles/Tinterview.module.css"; // CSSモジュールの適用

const Interview = () => {
  return (
    <div className={styles.section}>
      {/* ── 会話パート ── */}
      <div className={styles.conversation}>
        <div className={styles.heading}>
          <h1>
            ヨコヤマの商品は、
            <br />
            成分表を見てほしい
          </h1>
        </div>
        <div className={styles.talksection}>
          <p className={styles.yokoyamasan}>
            横山　TONGARIに続く新商品TORIPAIを2025年の春に発売予定です！ ヨコヤマの商品は成分表を見て欲しいので、味にも成分にも妥協せず今準備しています！ 皆さんの食卓に必ず美味しいソースをお届けするので、もうしばらくお待ちください！
          </p>
          {/* <p className={styles.kikite}>
            確かに。豚骨じゃなくてラードが使われているものとかも結構ありますよね。
          </p>
          <p className={styles.yokoyamasan}>
            横山　そうなんです。味わいをよくする為だったり、コストの関係だったり。
            理由は様々だと思うんですけど、僕はちゃんと豚骨味なら豚骨を使いたいって考えなんです。本来はそれが正しいはずですしね。
          </p>
          <p className={styles.kikite}>
            確かに。。。当たり前ってやっぱり意外と難しい。成分表って、そもそも記載される順番に決まりとかあるんですか？
          </p>
          <p className={styles.yokoyamasan}>
            横山　あ。ありますよ。成分表は内容量が多いものが前に表記するようになっています。前に書かれていればいるほど基本的には味わいを強く感じますね。
          </p>
          <p className={styles.kikite}>
            そうなんですね、TONGARIは豚骨スープが一番最初に来てますね。
          </p>
          <p className={styles.yokoyamasan}>
            横山　そうなんですよ。本物の豚骨をせっかく使っているなら、一番多く入れればちゃんと豚骨を感じてもらえる。
            TONGARIにとって、知ってほしい大事なことから順に書いてあるんですよ。そう言う状態を基本にしながら作ることは意識してますね。
          </p>
          <p className={styles.kikite}>
            アツいですね。。！でも成分表とかってあんまり目に付く機会って少ないと思うんですけど、なんでそこまでこだわり切れるんですか？
          </p>
          <p className={styles.yokoyamasan}>
            横山　単純に豚骨味なら豚骨以外を使いたくないって言うのもありますけど、ぶっちゃけドレッシングって大手でいいやってなっちゃうじゃないですか。もし自分もこうやって作ってなかったらそうだったかもしれないし。そんな状況で大手に勝てるとしたらこうするしかない（笑）
            豚骨って管理も大変だし、材料的にも人材的にもコストが凄くかかる。みんなやらないからこそ、そこには価値があるって思っているんです。
          </p>
          <p className={styles.kikite}>
            めっちゃ真っ直ぐ。（笑）でも、そんな横山さんの人柄と思いがあるから生み出せるドレッシングに思えます！なにより美味しい！
          </p>
          <p className={styles.yokoyamasan}>
            横山　おお。ありがとうございます！結構香りとかもパンチ効いてて味は本当自信ありますよ！
          </p> */}
        </div>
      </div>

      {/* ── 成分表パート ── */}
      <div className={styles.display}>
        <p className={styles.paragraph}>
          名称:調味料
          <br />
          原材料名:
          <span className={styles.kodawariyanen}>鶏白湯スープ</span>
          (チキン
          <br />
          エキス、鶏油、食塩、その他)
           <br />
          (国内製造)還元澱粉糖化物、
          <br />
          食塩、生姜、
          <span className={styles.kodawariyanen}>ねりごま</span>
          /調味料
          <br />
          (アミノ酸等)、酸味料、増粘剤
          <br />
          <span className={styles.kerning}>(キサンタン)、ビタミンB1、(一部</span>
          <br />
          に鶏肉・豚肉・小麦・大豆・
          <br />
          ごまを含む)内容量160ml
          <br />
          賞味期限:枠外下部に記載
          <br />
          保存方法:直射日光、高温多湿
          <br />
          を避けて保存。
          <br />
          販売者:(株)ヨコヤマ
          <br />
          <span className={styles.address}>東京都新宿区西早稲田3-1-6-402</span>
          <br />
          <span className={styles.kerning}>製造所:神奈川県鎌倉市御成町 20-5</span>
        </p>
      </div>
    </div>
  );
};

export default Interview;
