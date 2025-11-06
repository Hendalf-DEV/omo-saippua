"use client";

import { useState } from "react";

export default function ProductsTrash() {
  const [cart, setCart] = useState(0);

  const products = [
    { name: "INVISIBLE INK", price: 999.99, emoji: "👻" },
    { name: "BROKEN DREAMS", price: 0.01, emoji: "💔" },
    { name: "EXPIRED MILK", price: 420.69, emoji: "🥛" },
    { name: "MYSTERY BOX", price: 1337, emoji: "📦" },
    { name: "SPAM EMAIL", price: 0.99, emoji: "📧" },
    { name: "USED NAPKIN", price: 5000, emoji: "🧻" },
    { name: "DIGITAL TRASH", price: 666, emoji: "🗑️" },
    { name: "FAKE MONEY", price: 100, emoji: "💵" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 p-8">
      <div className="text-center animate-[shake_0.5s_infinite]">
        <h1 className="text-[12rem] font-black text-white [text-shadow:_10px_10px_0_#000,_15px_15px_0_#f00] animate-pulse">
          🛒 SHOP NOW!!! 🛒
        </h1>
      </div>

      <div className="bg-purple-600 border-[20px] border-double border-yellow-400 p-8 max-w-6xl mx-auto mt-12 transform -rotate-1">
        <div className="overflow-hidden mb-8">
          <div className="animate-[wiggle_1s_infinite]">
            <p className="text-6xl font-black text-lime-300 text-center animate-[blink_0.8s_infinite]">
              💰 AMAZING DEALS YOU CAN&apos;T REFUSE!!! 💰
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`
                bg-gradient-to-br from-pink-500 to-purple-700
                border-8 border-solid border-black
                p-6
                transform hover:scale-125 hover:rotate-12
                transition-all duration-300
                shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
                ${index % 2 === 0 ? 'animate-bounce' : 'animate-pulse'}
              `}
              style={{ animationDuration: `${1 + index * 0.2}s` }}
            >
              <div className="text-9xl text-center mb-4 animate-spin" style={{ animationDuration: '3s' }}>
                {product.emoji}
              </div>
              <h3 className="text-3xl font-black text-yellow-300 text-center mb-4 bg-black p-2 border-4 border-red-500">
                {product.name}
              </h3>
              <p className="text-5xl font-black text-center text-lime-400 mb-4 animate-[blink_1s_infinite]">
                ${product.price}
              </p>
              <button
                onClick={() => setCart(cart + 1)}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-2xl px-6 py-4 border-6 border-black hover:animate-[rotate-crazy_0.5s_infinite] shadow-lg"
              >
                BUY NOW!!!
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black border-8 border-green-500 p-8 text-center">
          <p className="text-6xl font-black text-yellow-400 animate-bounce mb-4">
            🛒 CART: {cart} ITEMS 🛒
          </p>
          <p className="text-4xl text-red-500 font-black animate-[blink_0.5s_infinite]">
            (Items will NOT be shipped because this is FAKE!)
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 border-[15px] border-dotted border-pink-500 p-12">
        <h2 className="text-7xl font-black text-center text-yellow-300 mb-8 animate-[rainbow_2s_infinite]">
          ⭐ CUSTOMER REVIEWS ⭐
        </h2>

        <div className="space-y-6">
          <div className="bg-red-500 border-8 border-black p-6 transform rotate-2">
            <p className="text-3xl font-black text-white">
              ⭐⭐⭐⭐⭐ &quot;This website gave me a headache!&quot; - Nobody
            </p>
          </div>
          <div className="bg-green-500 border-8 border-black p-6 transform -rotate-2">
            <p className="text-3xl font-black text-white">
              ⭐ &quot;Worst shopping experience ever!&quot; - Everyone
            </p>
          </div>
          <div className="bg-yellow-500 border-8 border-black p-6 transform rotate-1">
            <p className="text-3xl font-black text-white">
              ⭐⭐⭐⭐⭐ &quot;I want my money back!&quot; - You (probably)
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-16">
        <a href="/" className="bg-cyan-600 text-white font-black text-4xl px-12 py-6 border-[10px] border-solid border-pink-500 hover:animate-[rotate-crazy_2s_infinite] shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          🏠 HOME
        </a>
        <a href="/gallery" className="bg-orange-600 text-white font-black text-4xl px-12 py-6 border-[10px] border-solid border-blue-500 hover:animate-[rotate-crazy_2s_infinite] shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          🖼️ GALLERY
        </a>
        <a href="/contact" className="bg-purple-600 text-white font-black text-4xl px-12 py-6 border-[10px] border-solid border-yellow-500 hover:animate-[rotate-crazy_2s_infinite] shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          📧 CONTACT
        </a>
      </div>

      <div className="fixed bottom-4 left-4 text-9xl animate-[rotate-crazy_3s_infinite]">
        💸
      </div>
      <div className="fixed top-1/4 right-4 text-9xl animate-bounce">
        🎉
      </div>
    </div>
  );
}

