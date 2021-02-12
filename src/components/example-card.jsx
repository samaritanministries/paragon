import React from "react";

const ExampleCard = ({ children }) => (
  <div className="card">
    <div className="card-content">
      {children}
    </div>
  </div>
);

export default ExampleCard;
