import "./main.css";

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

export async function init(ctx, data) {
  await ctx.importCSS("main.css");

  const root = createRoot(ctx.root);
  root.render(<App ctx={ctx} data={data} />);
}

function App({ ctx, data }) {
  const [count, setCount] = useState(data.count);

  function handleClick() {
    ctx.pushEvent("bump_count");
  }

  useEffect(() => {
    ctx.handleEvent("count_updated", ({ count }) => {
      setCount(count);
    });
  }, []);

  return (
    // Delicious AI-generated UI.
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center space-y-6">
        <div className="text-5xl font-bold text-white">{count}</div>
        <button
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg"
          onClick={handleClick}
        >
          Click me!
        </button>
      </div>
    </div>
  );
}
