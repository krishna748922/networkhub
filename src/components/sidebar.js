import React from "react";

const Sidebar = ({ setSelectedCategory }) => {
  const categories = ["CCNA", "Computer Network", "CCNP"];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">NetworkHub</h1>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className="cursor-pointer text-lg mb-4 hover:text-yellow-400"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setSelectedCategory(null)}
        className="mt-8 bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400"
      >
        Show All
      </button>
    </div>
  );
};

export default Sidebar;
