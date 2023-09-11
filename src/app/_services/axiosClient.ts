import axios from "axios";

// export const axiosClient = axios.create({ baseURL: "http://localhost:3001" });

const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error || error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {message = 'something went wrong'}
  return message
} 

export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:3001");
    return response.data;
  }
  catch (error) {
    return getErrorMessage(error);
  }
};