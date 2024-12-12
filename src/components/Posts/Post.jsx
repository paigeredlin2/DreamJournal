import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.outerPost}>
      <div className={classes.innerPost}>
        <h4 className={classes.userPostName}>{props.username}</h4>
        <h4 className={classes.date}>{props.date}</h4>
        <p className={classes.story}>{props.story}</p>
      </div>
    </div>
  );
};
export default Post;
