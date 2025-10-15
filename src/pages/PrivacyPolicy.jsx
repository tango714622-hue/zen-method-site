import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">プライバシーポリシー</h1>
      <p className="mb-4">
        Zen Method（以下、「当サイト」といいます。）では、ユーザーの個人情報を適切に取り扱うことを重要な責務と認識し、以下の方針に基づいて個人情報の保護に努めます。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. 個人情報の利用目的</h2>
      <p className="mb-4">
        当サイトでは、お問い合わせやサービスのご案内の際に、名前・メールアドレス等の個人情報を取得する場合があります。
        取得した個人情報は、ユーザーとの連絡のみに利用し、これ以外の目的には使用いたしません。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. 広告配信について</h2>
      <p className="mb-4">
        当サイトでは、第三者配信の広告サービス「Google AdSense（グーグルアドセンス）」を利用しています。
        Googleなどの広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
        Cookieを無効にする方法や「Google広告におけるCookieの使用」については、
        <a
          href="https://policies.google.com/technologies/ads?hl=ja"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          こちら
        </a>
        をご覧ください。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. 個人情報の第三者提供</h2>
      <p className="mb-4">
        当サイトは、法令に基づく場合を除き、ユーザー本人の同意なく第三者に個人情報を提供することはありません。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. 免責事項</h2>
      <p className="mb-4">
        当サイトの掲載情報については、できる限り正確な情報を掲載するよう努めていますが、正確性や安全性を保証するものではありません。
        当サイトを利用して発生したいかなる損害についても、一切の責任を負いかねますのでご了承ください。
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. プライバシーポリシーの変更</h2>
      <p className="mb-4">
        当サイトは、法令の改正や運営方針の変更により、本プライバシーポリシーを予告なく変更する場合があります。
        変更後の内容は、本ページに掲載された時点で効力を持つものとします。
      </p>

      <p className="mt-8">制定日：2025年10月15日</p>
    </div>
  );
}
