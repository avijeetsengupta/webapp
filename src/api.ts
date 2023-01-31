import axios from "axios";

export const fetchData = async (): Promise<any> => {
  const url = "https://api.tvmaze.com/shows";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchSearchData = async (text: string): Promise<any> => {
  const url = `https://api.tvmaze.com/search/shows?q=${text}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchMovieDetailById = async (val: number): Promise<any> => {
  const url = `https://api.tvmaze.com/shows/${val}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchCastMember = async (val: number): Promise<any> => {
  const url = `https://api.tvmaze.com/shows/${val}/cast`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
