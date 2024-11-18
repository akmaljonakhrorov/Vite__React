import React from "react";
import Navbar from "../components/Navbar/index.jsx";
import { Outlet } from "react-router-dom";
import Destination from "../components/Destination/index.jsx";
import Cities from "../components/Cities/index.jsx";
import Ticket from "../components/Ticket/index.jsx";
import Facts from "../components/Facts/index.jsx";
import Location from "../components/Location/index.jsx";
import Booking from "../components/Booking/index.jsx";
import Reservation from "../components/Reservation/index.jsx";
import Footer from "../components/Footer/index.jsx";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Destination />
      <Cities />
      <Ticket />
      <Facts />
      <Location />
      <Booking />
      <Reservation />
      <Footer />
    </>
  );
};

export default MainLayout;
