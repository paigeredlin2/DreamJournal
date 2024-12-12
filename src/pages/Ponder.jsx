import { json, redirect } from "react-router-dom";
import DreamForm from "../components/Form/DreamForm";

const Ponder = () => {
  return (
    <div>
      <DreamForm />
    </div>
  );
};
export default Ponder;

export const DreamFormAction = async ({ request }) => {
  //process request type and data from the form
  console.log(request);
  const data = await request.formData();

  const submission = {
    username: data.get("username"),
    date: data.get("date"),
    story: data.get("story"),
  };
  console.log(submission);

  //post request
  const response = await fetch(
    "https://dreamjournal-faf2f-default-rtdb.firebaseio.com/Dreams.json",
    {
      method: request.method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(submission),
    }
  );

  if (!response.ok) {
    return { error: "issue with submitting" };
  }
  //return
  return redirect("/Observe");
};
