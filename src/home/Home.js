import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cityrage">City Rage</Link>
      </li>
    </div>
  );
};
