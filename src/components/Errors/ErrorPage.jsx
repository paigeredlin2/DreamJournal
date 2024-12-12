import "./ErrorPage.css";
const ErrorPage = (props) => {
  return (
    <div className="errorBody">
      <h1>Sorry, something went wrong...</h1>
      <h2>{props.message}</h2>
    </div>
  );
};
export default ErrorPage;
