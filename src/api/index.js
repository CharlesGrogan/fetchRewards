import axios from "axios";

const url =
  "https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json";

export const fetchData = async () => {
  try {
    const {
      data
    } = await axios.get(url);
    const group1 = data.filter(element => element.listId == 1);
    const group2 = data.filter(element => element.listId == 2);
    const group3 = data.filter(element => element.listId == 3);
    const group4 = data.filter(element => element.listId == 4);

    
    
    console.log("group1", typeof group1[27].name)
    console.log("group2", group2)
    console.log("group3", group3)
    console.log("group4", group4)
  } catch (err) {
    console.log(err);
  }
};
