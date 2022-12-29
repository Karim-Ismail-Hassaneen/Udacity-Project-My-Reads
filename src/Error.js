import React from "react";
import { NavLink } from "react-router-dom";

const Error = _ => {
  return (
    <section class="page-error">
      <div class="content-error-box">
        <h2>404</h2>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not available!</p>
        <NavLink to="/" class="link-404">
          Go to Home
        </NavLink>
      </div>
      <div class="four-zero-four-bg">
      </div>
    </section>
  );
};

export default Error;