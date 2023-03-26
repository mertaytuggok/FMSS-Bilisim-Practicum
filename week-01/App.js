import axios from "axios";

async function getData(Number) {
  const getUsers = async (Number) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + Number
    );
    console.log(data);
  };

  const getPost = async (Number) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts?id=" + Number
    );
    console.log(data);
  };
  const userData = await getUsers(Number);
  const postData = await getPost(Number);
  return userData + postData;
}

export default getData;
