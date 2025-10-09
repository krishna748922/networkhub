const API_URL = "https://networkhub-backend.onrender.com/api/tutorials"; // your Render backend

export const getAllTutorials = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getTutorialsByCategory = async (category) => {
  const res = await fetch(`${API_URL}/category/${category}`);
  return res.json();
};
