import classes from "./PostList.module.css";
import Post from "./Post";
const PostList = (props) => {
  const dreamList = props.listOfDreams;

  const dreamListInOrder = dreamList.toReversed();
  console.log(
    "dreamlist reversed so that newer posts are first:",
    dreamListInOrder
  );

  const dreamPostList = dreamListInOrder.map((dream) => {
    return (
      <li key={dream.id}>
        <Post username={dream.username} date={dream.date} story={dream.story} />
      </li>
    );
  });

  return (
    <div className={classes.outerPostList}>
      <h1>This is the collection of dreams!</h1>

      <ul className={classes.innerPostList}>
        <div className={classes.cloudGroup}>
          <img
            src="src\assets\Cloud1.png"
            alt="cloud"
            className={classes.cloudimg2}
          />
          <img
            src="src\assets\Cloud4.png"
            alt="cloud"
            className={classes.cloudimg1}
          />
        </div>
        <div className={classes.postList}>{dreamPostList}</div>
        <div className={classes.cloudGroup}>
          <img
            src="src\assets\Cloud3.png"
            alt="cloud"
            className={classes.cloudimg1}
          />
          <img
            src="src\assets\Cloud1.png"
            alt="cloud"
            className={classes.cloudimg2}
          />
        </div>
      </ul>
    </div>
  );
};
export default PostList;
