import React from "react";

import "./IconListItem.css";

const IconListItem = ({ icon, children }) => {
  return (
    <li className="iconListItem">
      <i>{React.cloneElement(icon, { className: "icon" })}</i>
      {children}
    </li>
  );
};

export default IconListItem;
