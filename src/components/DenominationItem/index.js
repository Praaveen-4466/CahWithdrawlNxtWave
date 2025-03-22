import React from "react";

const DenominationItem = (props) => {
  const { withDraw } = props;

  const withDraw50 = () => {
    withDraw(50);
  };

  const withDraw100 = () => {
    withDraw(100);
  };

  const withDraw200 = () => {
    withDraw(200);
  };

  const withDraw500 = () => {
    withDraw(500);
  };

  return (
    <ul className="list-container">
      <li className="button" onClick={withDraw50}>
        50
      </li>
      <li className="button" onClick={withDraw100}>
        100
      </li>
      <li className="button" onClick={withDraw200}>
        200
      </li>
      <li className="button" onClick={withDraw500}>
        500
      </li>
    </ul>
  );
};

export default DenominationItem;
