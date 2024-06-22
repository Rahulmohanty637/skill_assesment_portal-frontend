import React from "react";
import Header from "./Features/Pages/Constants/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Features/Pages/Constants/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import NavigationBar from "./Features/Pages/Home/NavigationBar";

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
      <NavigationBar/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
