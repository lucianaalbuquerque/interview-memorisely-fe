import axios from "axios";

type ErrorType = Error | string | { message: string; };

const axiosClient = axios.create({ baseURL: "http://localhost:3001" });

const getErrorMessage = (error: ErrorType) => {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'object' && 'message' in error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  } else {
    return 'Something went wrong';
  }
};

export const getData = async () => {
  try {
    const response = await axiosClient.get("/"); 
    return response.data;
  } catch (error) {
    throw getErrorMessage(error as ErrorType); 
  }
};