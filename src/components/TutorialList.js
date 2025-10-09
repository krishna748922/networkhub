import React, { useEffect, useState } from "react";
import {
  getAllTutorials,
  getTutorialsByCategory,
} from "../services/tutorialService";

const TutorialList = ({ selectedCategory }) => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (selectedCategory) {
        data = await getTutorialsByCategory(selectedCategory);
      } else {
        data = await getAllTutorials();
      }
      setTutorials(data);
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">
        {selectedCategory ? selectedCategory : "All Tutorials"}
      </h2>

      {tutorials.length === 0 ? (
        <p className="text-gray-600">No tutorials found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tut) => (
            <div
              key={tut.id}
              className="bg-white border rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{tut.title}</h3>
              <p className="text-gray-700 mb-2">{tut.description}</p>
              <details>
                <summary className="text-blue-600 cursor-pointer">
                  View Content
                </summary>
                <p className="mt-2 text-sm text-gray-800">{tut.content}</p>
              </details>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TutorialList;
