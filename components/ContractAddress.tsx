"use client";

export default function ContractAddress() {
  const ca = "So1aNaCa1234567890..."; // Replace with your actual CA

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ca);
    alert("Copied!");
  };

  return (
    <div className="mt-2 text-sm text-gray-300">
      <p>
        Contract Address: <span className="font-mono">{ca}</span>
      </p>
      <button
        onClick={copyToClipboard}
        className="mt-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
      >
        Copy
      </button>
    </div>
  );
}
