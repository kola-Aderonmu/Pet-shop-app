import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-2xl rounded-lg max-w-md w-full p-8 bg-green-300">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "cursive" }}
        >
          Logout Successful!
        </h1>
        <p className="text-lg mb-6" style={{ fontFamily: "cursive" }}>
          We look forward to seeing you again soon.
        </p>
        <Link to="/login" className="text-blue-500 underline">
          Go to Login Page
        </Link>
      </div>
    </div>
  );
};

export default Logout;
