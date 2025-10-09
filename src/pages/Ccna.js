import React, { useEffect, useState } from "react";
import { getTutorialsByCategory } from "../services/tutorialService";

const Ccna = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    getTutorialsByCategory("CCNA").then(setTutorials);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">CCNA Tutorials</h1>
      {tutorials.map((tut) => (
        <div key={tut.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-semibold">{tut.title}</h2>
          <p>{tut.description}</p>
          <details>
            <summary className="text-blue-600 cursor-pointer mt-2">View</summary>
            <p className="mt-2">{tut.content}</p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Ccna;
