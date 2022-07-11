import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="list-unstyled">
        <NavLink to="/users">
          <li>users</li>
        </NavLink>
        <NavLink to="/packages">
          <li>packages</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
