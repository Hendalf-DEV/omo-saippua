"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black flex items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-red-600 font-black text-9xl opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            404
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="animate-[shake_0.5s_infinite]">
          <h1 className="text-[20rem] font-black text-red-500 [text-shadow:_0_0_20px_#ff0000,_0_0_40px_#ff0000,_0_0_60px_#ff0000] animate-[blink_0.5s_infinite]">
            404
          </h1>
        </div>

        <div className="mt-8 animate-bounce">
          <p className="text-8xl font-black text-yellow-400 mb-8">
            🚨 CRITICAL ERROR 🚨
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900 border-[15px] border-double border-red-600 p-12 mt-12 transform rotate-1">
          <p className="text-6xl font-black text-white mb-8 animate-pulse">
            PAGE NOT FOUND!
          </p>

          <p className="text-4xl text-lime-400 mb-8">
            The page you&apos;re looking for is probably as lost as you are right now.
          </p>

          <div className="flex justify-center gap-4 my-12">
            <div className="text-9xl animate-[rotate-crazy_2s_infinite]">😵</div>
            <div className="text-9xl animate-[rotate-crazy_3s_infinite]">🌀</div>
            <div className="text-9xl animate-[rotate-crazy_4s_infinite]">💥</div>
          </div>

          <div className="space-y-4 text-3xl text-pink-400">
            <p className="animate-[wiggle_1s_infinite]">❌ Error Code: TRASH-404-GARBAGE</p>
            <p className="animate-[wiggle_1.2s_infinite]">❌ Status: Completely Broken</p>
            <p className="animate-[wiggle_0.8s_infinite]">❌ Solution: None. Give up.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 justify-center">
          <a href="/" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-5xl px-16 py-8 border-[10px] border-yellow-500 hover:animate-[rotate-crazy_1s_infinite] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
            🏠 GO HOME
          </a>
          <a href="/gallery" className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-black text-5xl px-16 py-8 border-[10px] border-orange-500 hover:animate-[rotate-crazy_1s_infinite] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
            🖼️ GALLERY
          </a>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-red-600 to-yellow-600 text-white font-black text-5xl px-16 py-8 border-[10px] border-cyan-500 hover:animate-[rotate-crazy_1s_infinite] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            🔄 RELOAD
          </button>
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="animate-[wiggle_1s_infinite]">
            <p className="text-7xl font-black text-yellow-300 animate-[rainbow_3s_infinite]">
              🔥🔥🔥 YOU BROKE THE INTERNET 🔥🔥🔥
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-4 gap-4">
          <div className="text-8xl animate-bounce">⚠️</div>
          <div className="text-8xl animate-pulse">🚨</div>
          <div className="text-8xl animate-spin">💀</div>
          <div className="text-8xl animate-ping">☠️</div>
        </div>
      </div>
    </div>
  );
}

