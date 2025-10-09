import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import TutorialList from "./components/TutorialList";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="flex">
      <Sidebar setSelectedCategory={setSelectedCategory} />
      <TutorialList selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
