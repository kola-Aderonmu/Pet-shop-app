import React from "react";
import MarketPlace from "./Pages/marketplace/MarketPlace";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import MainLayOut from "./layout/MainLayOut";
import Reviews from "./Pages/marketplace/Reviews";
import MarketPlaceLayout from "./layout/MarketPlaceLayout";
import PetDetails from "./Pages/marketplace/PetDetails";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./Pages/Logout";

const App = () => {
  return (
    <>
      <Routes>
        {/* ****************************************************** */}
        {/* ************************************************************* */}
        {/* Sharing Same Layout */}

        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />

          {/* nested layout */}
          <Route path="/marketplace" element={<MarketPlaceLayout />}>
            <Route index element={<MarketPlace />} />
            <Route path=":petId" element={<PetDetails />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* this is the route for the protection */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>

        {/* ******************************************************** */}

        {/* About route  */}

        <Route path="/about" element={<About />} />
        {/* ************************************************************* */}

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
