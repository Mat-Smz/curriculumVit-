import React from "react";
import "./Section.css";

const Section = ({ children, title, icon }) => {
  return (
    <section className="section">
      <i>{React.cloneElement(icon, { className: "icon" })}</i>
      <div>
        <h2 className="title">{title}</h2>
        <article>{children}</article>
      </div>
    </section>
  );
};

export default Section;
