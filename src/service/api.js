import axios from "axios";

export const api = axios.create({
    baseURL:"https://fakestoreapi.com/",
    headers: {
        'Content-Type': 'application/json',
      }
});

export default api