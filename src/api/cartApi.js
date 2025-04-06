import axios from "axios";

const API = "http://localhost:5000/api/cart"; // Change if hosted

export const getCartItems = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addToCart = async (courseId) => {
  const res = await axios.post(API, { courseId });
  return res.data;
};

export const removeFromCart = async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};
