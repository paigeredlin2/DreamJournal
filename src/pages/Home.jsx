import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.innerHome}>
        <h1 className={classes.titleStatement}>Welcome to dream journal!</h1>
        <h2>
          This is a shared place to write down your dreams and read others'.
          Recording dreams has led to improvements in self-awareness and
          emotional processing.
        </h2>
        <div className={classes.cloudsGroup}>
          <img
            src="src\assets\Cloud3.png"
            className={classes.cloudimg1}
            alt="cloud"
          />
          <img
            src="src\assets\Cloud4.png"
            className={classes.cloudimg2}
            alt="cloud"
          />
          <img
            src="src\assets\Cloud1.png"
            className={classes.cloudimg3}
            alt="cloud"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
