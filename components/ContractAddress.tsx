"use client";

import { useState } from "react";

export default function ContractAddress() {
  const ca = "So1aNaCa1234567890..."; // 🔁 Replace this with your real CA
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // optional: remove "Copied!" feedback after 2s
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <p className="text-sm text-white/80 mb-2">
        Contract Address: <span className="font-mono">{ca}</span>
      </p>
      <button
        onClick={copyToClipboard}
        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-sm rounded-full shadow-lg transition duration-200"
      >
        Copy Contract Address
      </button>
    </div>
  );
}
