import axios from "axios";

const url =
  "https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json";

export const fetchData = async () => {
  try {
    const {
      data
    } = await axios.get(url);
    return data;
    
  } catch (err) {
    console.log(err);
  }
};
