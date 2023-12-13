import { Button, Avatar, Space } from "antd";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
import { useDispatch, useSelector } from "react-redux";

// import { Input } from "antd";

const Navbar = () => {
  const navigate = useNavigate();

  // ****************************************
  const { value } = useSelector((state) => state.counter);
  const { user } = useSelector((state) => state.user);

  const [isLogoutConfirmed, setIsLogoutConfirmed] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Perform logout actions here, e.g., clear authentication tokens or state
      setIsLogoutConfirmed(true);
      // localStorage.removeItem("user"); // Assuming you store user info in localStorage
      console.log("User logged out successfully");
      // Redirect to the desired page after logout
      navigate("/logout");
    }
  };

  return (
    <nav
      className="shadow-2xl py-1 sticky top-0 z-10"
      style={{ backgroundColor: "#ffdead" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {" "}
          <img
            src="https://th.bing.com/th/id/OIP.TPa_HpG2EtaDfZbSPI9A9AHaHa?rs=1&pid=ImgDetMain"
            alt=" barnd logo"
            srcset=""
            className="w-16"
          />
          <p className="font-bold text-white ml-2">My pet shop</p>
        </div>

        {/* <Input.Search
          placeholder="input search text"
          //   onSearch={onSearch}
          status="warning"
          style={{
            width: 300,
          }}
        /> */}

        {/* links for navigations  */}
        {/* Using NavLink tag: shows that you have an active link */}
        <div className="flex gap-6 font-extralight">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
          <NavLink to="/marketplace" style={{ textDecoration: "none" }}>
            Market Place
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            About Us
          </NavLink>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", paddingLeft: "32px" }}
          >
            Login
          </NavLink>

          <NavLink to="/admin" style={{ textDecoration: "none" }}>
            Admin
          </NavLink>

          {/* <Button type="primary" onClick={handleLogout} className="w-full">
            Log Out
          </Button> */}
        </div>

        <p>
          {" "}
          <Avatar
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
              marginRight: "2px",
            }}
          >
            {user?.charAt(0).toUpperCase()}
          </Avatar>
          <span className="ml-2">
            Welcome, {user?.charAt(0).toUpperCase() + user?.slice(1)}!
          </span>
        </p>
      </div>
      <div className="grid justify-items-end mr-5 ">
        <Button type="primary" onClick={handleLogout} className="">
          Log Out
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
