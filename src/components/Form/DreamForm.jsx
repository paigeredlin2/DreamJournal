import { Form } from "react-router-dom";
import classes from "./DreamForm.module.css";

const DreamForm = () => {
  // Don't need extra state processing logic because of Form tag from react-router-dom
  return (
    <div className={classes.outerDreamForm}>
      <h2 className={classes.writeIntro}>
        This is the place to write down your dreams!
      </h2>
      <div className={classes.innerDreamForm}>
        {/* learned to put the router path of action within this form from yt */}
        <Form method="post" action="/Ponder" className={classes.dreamForm}>
          <p>
            <label htmlFor="username">Your Name</label>
            {/* inputs need the name attribute in order for data.get in DreamFormAction */}
            <input type="text" name="username" id="username" required />
          </p>
          <p>
            <label htmlFor="date">The night your dream occurred</label>
            <input type="date" name="date" id="date" required />
          </p>
          <p>
            <label htmlFor="story">What happened</label>
            <textarea name="story" id="story" required></textarea>
          </p>
          <p>
            <button>Submit</button>
          </p>
        </Form>
      </div>
    </div>
  );
};
export default DreamForm;
