import React from "react";
import Header from "./Features/Pages/Contants/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Features/Pages/Contants/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
