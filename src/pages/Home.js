import React, { useEffect, useState } from "react";
import { getAllTutorials } from "../services/tutorialService";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    getAllTutorials().then(setTutorials);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Tutorials</h1>
      {tutorials.map((tut) => (
        <div key={tut.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-semibold">{tut.title}</h2>
          <p>{tut.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
