import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//pages
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import Ponder, { DreamFormAction } from "./pages/Ponder.jsx";
import Observe, { DreamLoader } from "./pages/Observe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "Ponder", element: <Ponder />, action: DreamFormAction },
      { path: "Observe", element: <Observe />, loader: DreamLoader },
    ],
  },
]);
function App() {
  return (
    <body className="appBody">
      <RouterProvider router={router} />
    </body>
  );
}

export default App;
