"use client";

import { useState } from "react";

export default function SecretTrash() {
  const [clicks, setClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 10) {
      setShowSecret(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-lime-400 p-8 font-mono relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center animate-[wiggle_0.5s_infinite]">
          <h1 className="text-8xl font-black text-red-500 animate-[blink_0.3s_infinite] mb-8">
            🔐 TOP SECRET AREA 🔐
          </h1>
          <p className="text-4xl text-yellow-400 animate-pulse mb-4">
            ⚠️ UNAUTHORIZED ACCESS DETECTED ⚠️
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-gray-900 border-4 border-green-500 p-8">
          <div className="mb-8">
            <p className="text-2xl mb-4 animate-[blink_1s_infinite]">
              &gt; INITIALIZING SECURE CONNECTION...
            </p>
            <p className="text-2xl mb-4">
              &gt; LOADING CLASSIFIED DATA...
            </p>
            <p className="text-2xl mb-4 text-red-500">
              &gt; ERROR: PERMISSION DENIED
            </p>
            <p className="text-2xl mb-4 text-yellow-400">
              &gt; OVERRIDE SEQUENCE ACTIVATED
            </p>
          </div>

          <div className="border-4 border-cyan-500 p-8 bg-black">
            <p className="text-3xl mb-6 text-center font-black">
              🕵️ TO ACCESS THE SECRET, CLICK THE BUTTON 10 TIMES 🕵️
            </p>

            <div className="text-center">
              <button
                onClick={handleClick}
                className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white font-black text-5xl px-16 py-8 border-8 border-yellow-500 hover:animate-[rotate-crazy_0.5s_infinite] shadow-[15px_15px_0px_0px_rgba(255,0,0,1)] mb-8"
              >
                🚨 CLICK ME 🚨
              </button>

              <p className="text-4xl font-black text-pink-500 animate-bounce">
                CLICKS: {clicks} / 10
              </p>
            </div>

            {showSecret && (
              <div className="mt-12 border-8 border-yellow-500 p-8 bg-gradient-to-br from-purple-900 to-pink-900 animate-pulse">
                <h2 className="text-6xl font-black text-center text-yellow-300 mb-8 animate-[rainbow_2s_infinite]">
                  🎉 THE SECRET REVEALED 🎉
                </h2>

                <div className="text-4xl text-center space-y-6 font-black">
                  <p className="animate-bounce">
                    🌟 The secret is... 🌟
                  </p>
                  <p className="text-6xl animate-[blink_0.5s_infinite] text-red-500">
                    THIS WEBSITE IS TRASH!
                  </p>
                  <p className="text-3xl text-cyan-400">
                    (But you already knew that)
                  </p>
                  <div className="text-9xl animate-spin">
                    🎊
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-3xl text-lime-400 animate-pulse">
                    CONGRATULATIONS! You wasted {clicks} clicks!
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="bg-red-600 h-32 animate-pulse"></div>
            <div className="bg-blue-600 h-32 animate-bounce"></div>
            <div className="bg-green-600 h-32 animate-spin"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-16">
          <a href="/" className="bg-green-600 text-black font-black text-3xl px-10 py-6 border-4 border-lime-400 hover:scale-150 transition-transform shadow-2xl">
            🏠 ESCAPE
          </a>
          <a href="/gallery" className="bg-purple-600 text-white font-black text-3xl px-10 py-6 border-4 border-pink-400 hover:scale-150 transition-transform shadow-2xl">
            🖼️ GALLERY
          </a>
          <a href="/404" className="bg-red-600 text-yellow-300 font-black text-3xl px-10 py-6 border-4 border-yellow-400 hover:scale-150 transition-transform shadow-2xl animate-[blink_1s_infinite]">
            ❌ ERROR PAGE
          </a>
        </div>

        <div className="mt-16 text-center overflow-hidden">
          <div className="animate-[wiggle_1s_infinite]">
            <span className="text-6xl">
              🚨🔥💀☠️⚠️🗑️💩🤮👎🚽🧨💣⚡🌪️🔴🔺❌‼️⁉️🆘🚷🚫
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

