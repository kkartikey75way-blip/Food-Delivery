import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToastContainer from "../components/ToastContainer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <ToastContainer /> 
      <Outlet />
      <Footer />
    </>
  );
}
