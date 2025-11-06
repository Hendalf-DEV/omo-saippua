export default function AboutTrash() {
  return (
    <div className="min-h-screen bg-[repeating-linear-gradient(45deg,#ff0000,#ff0000_10px,#ffff00_10px,#ffff00_20px)] p-8 overflow-hidden">
      <div className="animate-[shake_0.5s_infinite]">
        <h1 className="text-[10rem] font-black text-center animate-[rainbow_2s_linear_infinite] drop-shadow-[0_0_50px_rgba(0,0,0,1)]">
          🚨 ABOUT US 🚨
        </h1>
      </div>

      <div className="bg-lime-300 border-[20px] border-dashed border-purple-900 p-12 mt-8 transform rotate-3 hover:rotate-[-3deg] transition-all">
        <div className="h-[300px] overflow-hidden flex items-center justify-center">
          <div className="animate-bounce">
            <p className="text-6xl text-red-600 font-bold animate-[blink_1s_infinite]">
              ⚠️ WELCOME TO THE WORST WEBSITE EVER CREATED ⚠️
            </p>
          </div>
        </div>

        <div className="mt-8 text-3xl leading-relaxed">
          <p className="bg-cyan-400 p-4 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-4">
            👋 We are a team of HIGHLY UNPROFESSIONAL web developers who believe in making the WORST user experiences possible!
          </p>

          <p className="bg-pink-400 p-4 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-4 animate-bounce">
            🎯 Our mission: To bring back the GLORY DAYS of 1990s web design!
          </p>

          <p className="bg-yellow-400 p-4 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-4">
            💡 Fun fact: This website was coded entirely in Comic Sans MS!
          </p>
        </div>

        <div className="flex justify-around mt-12">
          <div className="text-9xl animate-[rotate-crazy_3s_infinite]">🤡</div>
          <div className="text-9xl animate-[rotate-crazy_2s_infinite]">🎪</div>
          <div className="text-9xl animate-[rotate-crazy_4s_infinite]">🎭</div>
        </div>
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        <a href="/" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-4xl px-12 py-6 border-8 border-white hover:animate-spin shadow-2xl">
          🏠 HOME
        </a>
        <a href="/contact" className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-black text-4xl px-12 py-6 border-8 border-white hover:animate-spin shadow-2xl">
          📧 CONTACT
        </a>
      </div>
    </div>
  );
}

