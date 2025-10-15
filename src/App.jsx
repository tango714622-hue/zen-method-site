import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

function Home() {
  return (
    <div className="container">
      <h1>Zen Method コーチングサイト</h1>

      <p>
        ロケットリーグ初心者からGC2まで対応！GC3ランクの私「おなべのふた」が
        ZENの動きを参考にしたコーチングを提供します。
      </p>

      <div className="buttons">
        <a
          href="https://x.com/onabeno_huta_?s=21&t=us_j0Nosy-hvDkXoB-9ylg"
          target="_blank"
          rel="noopener noreferrer"
          className="x-btn"
        >
          コーチング依頼（Xへ）
        </a>
        <a
          href="https://discord.gg/aiueo2951"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-btn"
        >
          Discordへ
        </a>
      </div>

      <div className="ad-space">
        ここに Google AdSense 広告が表示されます
      </div>

      {/* C帯以下向け解説 */}
      <section>
        <h2>C帯以下向け解説</h2>
        <p>
          低ランクのプレイヤーはボールコントロールや基本ポジションを身につけることが最優先です。
        </p>
        <ul>
          <li>ボールを持つときは無理に仕掛けず、味方との簡単なパスを意識</li>
          <li>味方や相手の位置を常に把握して、ブースト管理を徹底する</li>
          <li>ジャンプ、ダッシュ、ブーストの基本動作を繰り返し練習</li>
          <li>シュート練習やゴール前の簡単な防衛を中心に基礎を固める</li>
        </ul>
      </section>

      {/* GC以上向け解説 */}
      <section>
        <h2>GC以上向け解説</h2>
        <p>
          GC以上のプレイヤーは、ZENの攻守の動きを意識し、状況判断とリズムを最適化することが重要です。
        </p>
        <ul>
          <li>
            攻めではボールを持たず、チャンスがあれば地上エアドリブルからフリッププリセットへつなぐ
          </li>
          <li>
            守りでは味方のボール保持を信頼し、少し離れた位置でカバーする意識
          </li>
          <li>攻守の切り替え時のリズムを意識し、無駄な動きを減らす</li>
          <li>試合中の味方とのポジション調整をZENの動きから学ぶ</li>
        </ul>
      </section>

      <footer className="footer">
        <Link to="/privacy-policy">プライバシーポリシー</Link> |{" "}
        <Link to="/contact">お問い合わせ</Link>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
