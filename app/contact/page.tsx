export default function ContactTrash() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 p-8">
      <div className="text-center animate-[wiggle_1s_infinite]">
        <h1 className="text-[12rem] font-black animate-[blink_0.5s_infinite] text-yellow-300 [text-shadow:_5px_5px_0_rgb(0_0_0),_10px_10px_0_rgb(255_0_0),_15px_15px_0_rgb(0_255_0),_20px_20px_0_rgb(0_0_255)]">
          📞 CONTACT US 📞
        </h1>
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-12 border-[15px] border-double border-black transform -rotate-2">
        <div className="overflow-hidden">
          <div className="animate-[wiggle_1s_infinite]">
            <p className="text-5xl font-black text-red-600">
              🔥🔥🔥 FILL OUT THIS TOTALLY LEGITIMATE FORM!!! 🔥🔥🔥
            </p>
          </div>
        </div>

        <form className="mt-8 space-y-6">
          <div className="animate-bounce">
            <label className="text-4xl font-black text-green-900 block mb-2">
              👤 YOUR NAME (we&apos;ll definitely NOT sell this data):
            </label>
            <input
              type="text"
              className="w-full p-6 text-3xl border-8 border-yellow-500 bg-cyan-200 font-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              placeholder="John Doe or whatever..."
            />
          </div>

          <div className="animate-pulse">
            <label className="text-4xl font-black text-blue-900 block mb-2">
              📧 EMAIL (so we can SPAM you):
            </label>
            <input
              type="email"
              className="w-full p-6 text-3xl border-8 border-red-500 bg-lime-200 font-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              placeholder="email@trash.com"
            />
          </div>

          <div>
            <label className="text-4xl font-black text-purple-900 block mb-2 animate-[shake_1s_infinite]">
              💬 MESSAGE (we probably won&apos;t read it):
            </label>
            <textarea
              rows={6}
              className="w-full p-6 text-3xl border-8 border-green-500 bg-pink-200 font-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              placeholder="Type your complaints here..."
            />
          </div>

          <div className="flex gap-4 justify-center items-center mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-yellow-600 text-white font-black text-5xl px-16 py-8 border-[10px] border-black hover:animate-[rotate-crazy_1s_infinite] shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              🚀 SUBMIT TO THE VOID 🚀
            </button>

            <div className="text-8xl animate-spin">
              🌀
            </div>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-4xl font-black text-red-900 animate-[blink_1s_infinite]">
            ⚠️ DISCLAIMER: This form goes NOWHERE! ⚠️
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-12">
        <a href="/" className="bg-blue-600 text-yellow-300 font-black text-3xl px-8 py-4 border-8 border-pink-500 hover:scale-150 transition-transform shadow-2xl">
          🏠 HOME
        </a>
        <a href="/about" className="bg-green-600 text-orange-300 font-black text-3xl px-8 py-4 border-8 border-purple-500 hover:scale-150 transition-transform shadow-2xl">
          ℹ️ ABOUT
        </a>
        <a href="/gallery" className="bg-red-600 text-lime-300 font-black text-3xl px-8 py-4 border-8 border-cyan-500 hover:scale-150 transition-transform shadow-2xl">
          🖼️ GALLERY
        </a>
      </div>

      <div className="fixed bottom-4 right-4 text-9xl animate-bounce cursor-pointer">
        👻
      </div>
    </div>
  );
}

