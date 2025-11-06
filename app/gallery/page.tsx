export default function GalleryTrash() {
  const trashImages = [
    { emoji: "🗑️", label: "Literal Trash" },
    { emoji: "💩", label: "Quality Content" },
    { emoji: "🤮", label: "User Reaction" },
    { emoji: "🔥", label: "Dumpster Fire" },
    { emoji: "☠️", label: "Dead Memes" },
    { emoji: "🤡", label: "Web Design" },
    { emoji: "💀", label: "Your Eyes" },
    { emoji: "🚽", label: "Where This Belongs" },
    { emoji: "🎪", label: "This Whole Site" },
    { emoji: "🧨", label: "Explosive Design" },
    { emoji: "⚠️", label: "Warning Sign" },
    { emoji: "🚨", label: "Emergency Alert" }
  ];

  return (
    <div className="min-h-screen bg-[repeating-conic-gradient(from_0deg,#ff0000_0deg_30deg,#00ff00_30deg_60deg,#0000ff_60deg_90deg,#ffff00_90deg_120deg)] p-8">
      <div className="animate-[shake_0.3s_infinite]">
        <h1 className="text-[15rem] font-black text-center text-white [text-shadow:_0_0_10px_#000,_0_0_20px_#f0f,_0_0_30px_#f0f,_0_0_40px_#f0f] animate-pulse">
          🖼️ GALLERY OF HORRORS 🖼️
        </h1>
      </div>

      <div className="overflow-hidden">
        <div className="animate-[wiggle_2s_infinite]">
          <p className="text-6xl font-black text-yellow-300 animate-[rainbow_3s_infinite]">
            ⭐⭐⭐ BEHOLD OUR MAGNIFICENT COLLECTION OF TRASH!!! ⭐⭐⭐
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">
        {trashImages.map((item, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600
              border-[10px] border-double 
              ${index % 2 === 0 ? 'border-yellow-400' : 'border-lime-400'}
              p-8 
              transform 
              ${index % 3 === 0 ? 'rotate-6' : index % 3 === 1 ? '-rotate-6' : 'rotate-3'}
              hover:scale-125 hover:rotate-12 
              transition-all duration-300
              shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
              cursor-pointer
              ${index % 4 === 0 ? 'animate-bounce' : index % 4 === 1 ? 'animate-pulse' : index % 4 === 2 ? 'animate-spin' : 'animate-ping'}
            `}
            style={{ animationDuration: `${1 + index * 0.3}s` }}
          >
            <div className="text-[8rem] text-center mb-4">
              {item.emoji}
            </div>
            <p className="text-2xl font-black text-center text-white bg-black p-2 border-4 border-red-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-orange-400 border-[15px] border-solid border-blue-900 p-12 max-w-5xl mx-auto transform -rotate-1">
        <h2 className="text-7xl font-black text-center text-red-600 animate-[blink_0.8s_infinite] mb-8">
          🎨 VISITOR COUNTER (TOTALLY REAL) 🎨
        </h2>
        <div className="flex justify-center gap-4">
          {[9, 9, 9, 9, 9, 9, 9].map((num, i) => (
            <div
              key={i}
              className="text-9xl font-black text-green-600 bg-black border-8 border-yellow-500 px-6 py-4 animate-[wiggle_1s_infinite]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {num}
            </div>
          ))}
        </div>
        <p className="text-3xl text-center mt-6 font-black animate-pulse">
          (we definitely have 9,999,999 visitors and not just you)
        </p>
      </div>

      <div className="mt-12 text-center overflow-hidden">
        <div className="animate-[wiggle_1s_infinite] inline-block">
          <span className="text-5xl">🎉🎊🎈🎁🎀🎯🎲🎰🎪🎭🎨🎬🎤🎧🎼🎹🎺🎻🥁</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-16">
        <a href="/" className="bg-red-700 text-yellow-200 font-black text-4xl px-10 py-6 border-[12px] border-dashed border-cyan-400 hover:animate-[rotate-crazy_2s_infinite] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          🏠 HOME
        </a>
        <a href="/about" className="bg-blue-700 text-pink-200 font-black text-4xl px-10 py-6 border-[12px] border-dashed border-lime-400 hover:animate-[rotate-crazy_2s_infinite] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          ℹ️ ABOUT
        </a>
        <a href="/contact" className="bg-green-700 text-orange-200 font-black text-4xl px-10 py-6 border-[12px] border-dashed border-purple-400 hover:animate-[rotate-crazy_2s_infinite] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          📧 CONTACT
        </a>
        <a href="/secret" className="bg-purple-700 text-lime-200 font-black text-4xl px-10 py-6 border-[12px] border-dashed border-red-400 hover:animate-[rotate-crazy_2s_infinite] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-[blink_1s_infinite]">
          🔐 SECRET
        </a>
      </div>

      <div className="fixed top-1/2 left-0 text-8xl animate-bounce">
        ⬅️
      </div>
      <div className="fixed top-1/2 right-0 text-8xl animate-bounce">
        ➡️
      </div>
    </div>
  );
}

