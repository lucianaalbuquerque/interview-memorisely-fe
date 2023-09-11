import axios from "axios";

// export const axiosClient = axios.create({ baseURL: "http://localhost:3001" });

export const getData = async () => {
  const response = await axios.get("http://localhost:3001");
  return response.data;
};