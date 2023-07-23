import React, { useEffect, useRef, useState } from "react";
import Form from "./Form";
import "./App.css";
import "./LeftBox.css";
import "./RightBox.css";
import Display from "./Display";

function App() {
  const [billAmt, setBillAmt] = useState(0);
  const billAmtRef = useRef();
  const [people, setPeople] = useState();
  const setPeopleRef = useRef();
  const [tipSelected, setTipSelected] = useState(10);
  const [customTip, setCustomTip] = useState();
  const customTipRef = useRef();

  const [tipPerPerson, setTipPerPerson] = useState();
  const [totalPerPerson, setTotalPerPerson] = useState();

  useEffect(() => {
    if (tipSelected === null) {
      const total = (billAmt * customTip) / 100;
      const perPerson = total / people;
      setTipPerPerson(perPerson.toFixed(2));

      const total2 = billAmt / people;
      const perPerson2 = total2 + perPerson;
      setTotalPerPerson(perPerson2.toFixed(2));
    } else {
      const total = (billAmt * tipSelected) / 100;
      const perPerson = total / people;
      setTipPerPerson(perPerson.toFixed(2));

      const total2 = billAmt / people;
      const perPerson2 = total2 + perPerson;
      setTotalPerPerson(perPerson2.toFixed(2));
    }

    // console.log("billAmt:", billAmt);
  }, [billAmt, tipSelected, people, customTip]);

  // console.log(tipSelected);

  function handleBillAmt() {
    const bill = billAmtRef.current.value;
    setBillAmt(bill);
  }

  function handleCustom() {
    const custom = customTipRef.current.value;
    setTipSelected(null);
    setCustomTip(custom);
  }

  function handleReset() {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <Form
          billAmt={billAmt}
          tipSelected={tipSelected}
          setPeople={setPeople}
          setPeopleRef={setPeopleRef}
          billAmtRef={billAmtRef}
          setTipSelected={setTipSelected}
          handleBillAmt={handleBillAmt}
          setCustomTip={setCustomTip}
          handleCustom={handleCustom}
          customTipRef={customTipRef}
        />
        <Display
          handleReset={handleReset}
          totalPerPerson={totalPerPerson}
          tipPerPerson={tipPerPerson}
        />
      </div>
    </div>
  );
}

export default App;
