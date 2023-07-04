import React from "react";
import "./ButtonActions.scss";
import { Link } from "react-router-dom";

const ButtonActions = ({ label, link , btn}) => {
  if (link) {
    return (
      <section className="btn-link">
        <Link to={link} className={btn ? "btn" : ""}>
          <button className="btn-action">{label}</button>
        </Link>
      </section>
    );
  }
  return (
    <>
      <button className="btn-action">{label}</button>
    </>
  );
};

export default ButtonActions;
