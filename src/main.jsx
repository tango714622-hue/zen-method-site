import React from "react";
import ReactDOM from "react-dom/client";

const Section = ({ title, children }) => (
  <section style={{ maxWidth: "800px", marginBottom: "2rem", width: "100%" }}>
    <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "1rem", color: "#1d4ed8" }}>
      {title}
    </h2>
    {children}
  </section>
);

const AdBlock = () => (
  <div
    style={{
      backgroundColor: "#fef3c7",
      border: "2px dashed #f59e0b",
      borderRadius: "0.5rem",
      padding: "2rem",
      textAlign: "center",
      marginBottom: "2rem",
      width: "100%",
      maxWidth: "800px",
    }}
  >
    <p>ここに Google AdSense 広告が表示されます</p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "2rem",
        fontFamily: "sans-serif",
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#1d4ed8",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Zen Method コーチングサイト
      </h1>

      <p style={{ fontSize: "1.125rem", textAlign: "center", marginBottom: "2rem", maxWidth: "800px" }}>
        ロケットリーグ初心者からGC2まで対応！GC3ランクの私「おなべのふた」が
        ロケットリーグのトッププロ <strong>Zen</strong> の動きをもとにしたコーチングを提供します。
      </p>

      {/* ボタン */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "2rem",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <a
          href="https://x.com/onabeno_huta_?s=21&t=us_j0Nosy-hvDkXoB-9ylg"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            color: "white",
            backgroundColor: "#2563eb",
            minWidth: "180px",
            textAlign: "center",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        >
          コーチング依頼（Xへ）
        </a>
        <a
          href="https://discord.gg/aiueo2951"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            color: "white",
            backgroundColor: "#4f46e5",
            minWidth: "180px",
            textAlign: "center",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4338ca")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
        >
          Discordへ
        </a>
      </div>

      {/* 広告 */}
      <AdBlock />

      {/* C帯以下向け */}
      <Section title="C帯以下向け：Zenの考え方を自分のプレイに落とし込む">
        <p>🎯 テーマ：無理しない・味方を信じる・落ち着いて次を考える</p>
        <p>
          Zenみたいな動きは見た目が派手ですが、根っこは冷静でシンプルです。
          この「シンプルさ」を真似することが、上達の一番の近道です。
        </p>

        <h3>① 攻めの考え方 — “ボールを持ちすぎない”</h3>
        <p>💡 Zenの意図：ボールを「運ぶ」より「次の展開を作る」ことを重視</p>
        <ul>
          <li>ボールを持ったら、2タッチ以内に何かする（シュート・パス・壁パス・相手を引き出す）</li>
          <li>相手が近くにいる時は無理にドリブルせずに軽く当てて逃がす</li>
          <li>味方が近いときは「ボールを残してあげる」意識を持つ</li>
        </ul>

        <h3>② 守りの考え方 — “味方を信じて距離を取る”</h3>
        <p>💡 Zenの意図：味方を信頼し、自分は余裕を作る</p>
        <ul>
          <li>味方がボールに向かったら少し下がる</li>
          <li>味方がミスしても、すぐに反応できる位置をキープ</li>
          <li>ゴール前での2人飛びを避ける</li>
        </ul>

        <h3>③ 空中プレイ — “安定して運ぶことが目的”</h3>
        <p>💡 Zenの意図：カッコよく決めるより、安全に運ぶ</p>
        <ul>
          <li>浮いたボールは無理せず軽く触る</li>
          <li>エアドリブルは“ボールを前に運ぶ練習”として使う</li>
          <li>落ち着いて次の動きに戻れるようにする</li>
        </ul>

        <h3>④ 試合全体の考え方 — “無理せず、余裕を作る”</h3>
        <p>💡 Zenの意図：次のための動きを常に意識</p>
        <ul>
          <li>味方が近くにいる時は一歩引く</li>
          <li>相手がブーストを取りに行ったら軽く前へ出す</li>
          <li>常に「次どう動けるか？」を意識する</li>
        </ul>
      </Section>

      {/* 広告 */}
      <AdBlock />

      {/* GC以上向け */}
      <Section title="GC以上向け：Zenプレイ構造の徹底解剖">
        <p>🎯 テーマ：リズム・情報・構造の3層で相手を支配する</p>
        <p>
          Zenのプレイは、単なる高精度メカニックではなく、試合全体のテンポと認知情報の流れをコントロールする構造的プレイです。
        </p>

        <h3>① リズム層 — テンポ操作による主導権奪取</h3>
        <ul>
          <li>ボールに対する“触るタイミング”と“触らない時間”でリズムを支配</li>
          <li>無理なドリブルやフェイントを挟まず、1テンポ先に触る</li>
          <li>相手が早く出てくる場合は1拍遅らせてズラす</li>
        </ul>

        <h3>② 情報層 — 視点操作と信頼設計</h3>
        <ul>
          <li>味方の位置・相手のライン・次の展開を常に同時処理</li>
          <li>味方を信頼した構造的ポジションを取る</li>
          <li>自分が触らない時間＝味方が触る前提で組み立てる時間</li>
        </ul>

        <h3>③ 構造層 — リスクコントロールとプレッシャー設計</h3>
        <ul>
          <li>低リスクで高プレッシャーを与える構造を作る</li>
          <li>攻撃→守備への移行を“構造”で考える</li>
        </ul>

        <h3>④ 空中設計 — 効率的な上昇と制御</h3>
        <ul>
          <li>上昇角を低く、必ず少し前進を含めて上がる</li>
          <li>接触後の慣性を最小限に制御</li>
          <li>視点の動きが最短で滑らか</li>
        </ul>
      </Section>
    </div>
  </React.StrictMode>
);
