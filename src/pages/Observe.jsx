import PostList from "../components/Posts/PostList";
import ErrorPage from "../components/Errors/ErrorPage";
import { useLoaderData } from "react-router-dom";

const Observe = () => {
  const fetchedData = useLoaderData();
  console.log("fetchedData in observe", fetchedData);
  if (fetchedData.isError) {
    return <ErrorPage message={fetchedData.message} />;
  } else {
    return <PostList listOfDreams={fetchedData} />;
  }
};
export default Observe;

//loader function
export const DreamLoader = async () => {
  //get dreams list from db
  try {
    const response = await fetch(
      'https://dreamjournal-faf2f-default-rtdb.firebaseio.com/Dreams.json?orderBy="$key"',
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error("Could not retrieve dreams!");
    }
    const responseData = await response.json();
    console.log(responseData);

    const dreamList = [];
    for (const key in responseData) {
      dreamList.push({
        key: key,
        id: key,
        username: responseData[key].username,
        date: responseData[key].date,
        story: responseData[key].story,
      });
    }
    console.log("dreamlist in loader", dreamList);
    return dreamList;
  } catch (error) {
    return { isError: true, message: error.message };
  }
};
