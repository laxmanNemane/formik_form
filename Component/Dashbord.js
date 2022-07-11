import React from "react";
// import Component from "../Dashbord/Component";
import Header from "../Dashbord/Header";
import Sidebar from "../Dashbord/Sidebar";
// import Users from "../Pages/User";

// this is our ------------------------Hoc -------------------component

const Dashbord = (Component) => {
  return (props) => {
    return (
      <div className="d-flex mx-4 mt-4 ">
        <Sidebar />
        <div className="ms-5">
          <Header />
          <Component />
        </div>
      </div>
    );
  };
};

export default Dashbord;
