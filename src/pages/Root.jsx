import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;
