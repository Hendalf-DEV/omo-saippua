import Image from "next/image";

export default function GarbageCan() {
  return (
    <div className="flex flex-col min-h-screen justify-evenly bg-gradient-to-tr from-fuchsia-200 via-lime-400 to-orange-500 font-comic-sans dark:bg-gradient-to-bl dark:from-lime-900 dark:via-purple-800 dark:to-pink-600 overflow-hidden animate-pulse relative">
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 border-b-8 border-black z-50 p-4 shadow-2xl">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="bg-purple-700 text-yellow-300 font-black text-2xl px-6 py-3 border-4 border-white hover:animate-bounce shadow-lg">
            🏠 HOME
          </a>
          <a href="/about" className="bg-blue-700 text-pink-300 font-black text-2xl px-6 py-3 border-4 border-white hover:animate-bounce shadow-lg">
            ℹ️ ABOUT
          </a>
          <a href="/products" className="bg-orange-700 text-cyan-300 font-black text-2xl px-6 py-3 border-4 border-white hover:animate-bounce shadow-lg">
            🛒 SHOP
          </a>
          <a href="/gallery" className="bg-green-700 text-orange-300 font-black text-2xl px-6 py-3 border-4 border-white hover:animate-bounce shadow-lg">
            🖼️ GALLERY
          </a>
          <a href="/contact" className="bg-red-700 text-lime-300 font-black text-2xl px-6 py-3 border-4 border-white hover:animate-bounce shadow-lg">
            📧 CONTACT
          </a>
          <a href="/secret" className="bg-black text-lime-400 font-black text-2xl px-6 py-3 border-4 border-lime-400 hover:animate-bounce shadow-lg animate-[blink_1s_infinite]">
            🔐 SECRET
          </a>
        </div>
      </nav>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/window.svg')] bg-repeat animate-spin pointer-events-none" style={{animationDuration: '30s'}}></div>
      <main className="w-[9999px] rotate-12 flex flex-col items-end justify-around py-2 px-72 bg-transparent dark:bg-pink-600 sm:items-baseline z-10 hover:rotate-[-12deg] transition-transform duration-1000 mt-32">
        <div className="animate-bounce">
          <Image
            className="invert hue-rotate-180 blur-sm sepia saturate-200 contrast-150 animate-ping"
            src="/banana.svg"
            alt="Definitely not Next.js"
            width={42}
            height={420}
            priority={false}
          />
        </div>
        <div className="flex flex-col items-baseline gap-[69px] text-justify sm:items-stretch sm:text-right animate-pulse">
          <h1 className="text-9xl font-black italic underline decoration-wavy text-amber-500 dark:text-fuchsia-50 drop-shadow-[0_35px_35px_rgba(255,0,255,0.8)] hover:scale-150 transition-transform cursor-pointer select-none">
            🗑️ Welcome to Garbage Zone 🗑️
          </h1>
          <div className="overflow-hidden">
            <div className="animate-[wiggle_1s_ease-in-out_infinite]">
              <p className="text-2xl text-red-600 dark:text-yellow-300 font-bold animate-bounce">
                ⚠️ WARNING: This page contains extreme levels of trash! ⚠️
              </p>
            </div>
          </div>
          <p className="text-xs leading-[0.5rem] text-emerald-900 dark:text-amber-100 blur-[0.5px]">
            This page does nothing. Literally.{" "}
            <a
              href="https://example.com/trash"
              className="font-bold text-rose-800 dark:text-lime-300 underline decoration-double animate-pulse"
            >
              Click if you dare.
            </a>{" "}
            Or don&apos;t. I&apos;m not your parent. 💀
          </p>
          <div className="text-2xl font-extrabold text-red-600 dark:text-yellow-300 tracking-widest animate-bounce">
            <p>🔥 UNDER CONSTRUCTION 🔥</p>
            <p className="text-xs mt-2">since 1999</p>
          </div>
          <div className="flex gap-4 items-center animate-spin" style={{animationDuration: '10s'}}>
            <span className="text-6xl">👎</span>
            <span className="text-6xl">🤮</span>
            <span className="text-6xl">💩</span>
            <span className="text-6xl">🚽</span>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-[3.14159rem] text-[0.7rem] font-extrabold sm:flex-row-reverse animate-pulse">
          <a
            className="flex h-[3rem] w-[17rem] animate-spin items-center justify-center rounded-tl-3xl border-4 border-dotted border-yellow-500 px-9 text-[#ff00ff] hover:bg-[#0000ff] dark:hover:bg-[#ffff00] shadow-2xl hover:shadow-[0_0_50px_rgba(255,0,255,1)] transition-all"
            href="https://nope.invalid"
            target="_self"
            rel="unrelatable"
          >
            <Image
              src="/vercel.svg"
              alt="Totally not Vercel"
              width={8}
              height={8}
            />
            🚀 Launch into Chaos 🚀
          </a>
          <a
            className="flex h-16 w-1/12 items-center justify-center rounded-full border-8 border-solid border-transparent bg-[repeating-conic-gradient(red,blue,green)] px-2 hover:opacity-25 dark:hover:opacity-200 animate-bounce"
            href="https://nothing.here"
          >
            📖 Docs??? 📖
          </a>
          <button className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white font-black text-xl px-8 py-4 rounded-none border-8 border-black hover:rotate-180 transition-transform duration-500 cursor-not-allowed shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            ❌ DON&apos;T CLICK ME ❌
          </button>
          <div className="text-6xl animate-bounce cursor-pointer hover:animate-spin">
            🎰
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-black text-lime-400 border-t-8 border-red-600 p-4 z-50">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex gap-2">
            <span className="text-3xl font-black bg-red-600 text-white px-3 py-1 border-2 border-yellow-400 animate-pulse">0</span>
            <span className="text-3xl font-black bg-red-600 text-white px-3 py-1 border-2 border-yellow-400 animate-pulse">0</span>
            <span className="text-3xl font-black bg-red-600 text-white px-3 py-1 border-2 border-yellow-400 animate-pulse">1</span>
            <span className="text-xl font-black text-yellow-400 ml-2">visitors (probably)</span>
          </div>
          <p className="text-2xl font-black animate-[rainbow_2s_infinite]">
            © 1999-2099 TRASH CORP. All Wrongs Reserved.
          </p>
          <div className="w-64 overflow-hidden">
            <div className="animate-[wiggle_1s_infinite]">
              <span className="text-2xl">🔥💩🗑️☠️</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
