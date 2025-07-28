"use client";

export default function ContractAddress() {
  const ca = "So1aNaCa1234567890..."; // replace with your CA

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ca);
    alert("Copied!");
  };

  return (
    <div className="mt-2 text-sm text-gray-300">
      Contract Address:{" "}
      <span className="font-mono">{ca}</span>
      <button
        onClick={copyToClipboard}
        className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Copy
      </button>
    </div>
  );
}
