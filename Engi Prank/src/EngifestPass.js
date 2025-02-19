import { useState, useEffect } from "react";

export default function EngifestPass() {
  const [isPrankActive, setIsPrankActive] = useState(false);
  const [isFinalMessage, setIsFinalMessage] = useState(false);
  const [isWarningActive, setIsWarningActive] = useState(false);

  useEffect(() => {
    if (isPrankActive) {
      setTimeout(() => {
        setIsWarningActive(true);
        setTimeout(() => {
          setIsFinalMessage(true);
        }, 10_000);
      }, 2_000);
    }
  }, [isPrankActive]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white text-center p-4 relative">
      {!isPrankActive ? (
        <div className="bg-gradient-to-br from-gray-800 to-black text-white p-8 rounded-2xl shadow-lg w-11/12 max-w-md text-center border border-gray-700">
          <h1 className="text-2xl font-bold mb-6">Engifest'25 Passes</h1>
          <input
            type="email"
            placeholder="Enter your Email ID"
            className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-900 text-white text-lg"
          />
          <input
            type="text"
            placeholder="Enter your College Name"
            className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-900 text-white text-lg"
          />
          <button
            onClick={() => setIsPrankActive(true)}
            className="bg-red-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-red-700 transition w-full text-lg"
          >
            Get Your Passes
          </button>
        </div>
      ) : isFinalMessage ? (
        <div className="text-3xl font-bold text-green-400 px-4 text-center">Relax! It's just a prank 🤣</div>
      ) : isWarningActive ? (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-black text-red-600 text-3xl font-bold px-4 text-center">
          <span>⚠️ WARNING ⚠️</span>
          <div className="mt-4 animate-spin rounded-full h-12 w-12 border-t-4 border-red-600"></div>
          <span className="text-lg mt-6">Your mobile phone is hacked.<br/>Extracting all data from the device to the server...</span>
        </div>
      ) : null}
    </div>
  );
}
