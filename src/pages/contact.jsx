import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます。送信が完了しました。");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">お名前</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">メールアドレス</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">メッセージ</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          送信
        </button>
      </form>
    </div>
  );
}
