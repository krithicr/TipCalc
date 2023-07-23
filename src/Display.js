import React from "react";
import "./App.css";
import "./RightBox.css";

const Display = ({ tipPerPerson, totalPerPerson, handleReset }) => {
  return (
    <div className="right_box">
      <div className="upper">
        <div className="tip_amount">
          <div className="text">
            <p className="title">Tip Amount</p>
            <p className="person">/person</p>
          </div>
          <div className="tip_values">
            <h2>{tipPerPerson > 0 ? `${tipPerPerson}` : "$0.00"}</h2>
          </div>
        </div>
        <div className="total">
          <div className="text">
            <p className="title">Total</p>
            <p className="person">/person</p>
          </div>
          <div className="total_values">
            <h2>{totalPerPerson > 0 ? `${totalPerPerson}` : "$0.00"}</h2>
          </div>
        </div>
      </div>
      <div className="lower">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Display;
