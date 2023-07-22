import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Asegúrate de que el puerto coincida con el del servidor

export const getHelloMessage = async () => {
  let response = await axios.get(`${API_URL}/hello`);
  return response.data;
};
