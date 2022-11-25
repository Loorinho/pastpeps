import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="overlay">
      <h3 className="text-center">
        Hello, and welcome to PastPEPS.....
        <br />
        Your one stop center for all past papers <br />
        Developed by you for you for the betterment of Makerere University's
        students' grades
      </h3>
      <Link to="/packages">
        <button className="getStarted btn btn-outline-light mt-5">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Home;
