"use client";

export default function ContractAddress() {
  const ca = "So1aNaCa1234567890..."; // ← Replace with your actual CA

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ca);
    alert("Copied to clipboard!");
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
