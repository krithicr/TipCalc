import React from "react";

const Form = ({
  handleBillAmt,
  setPeople,
  tipSelected,
  setTipSelected,
  billAmtRef,
  handleCustom,
  customTipRef,
  customTip,
}) => {
  return (
    <div className="left_box">
      <form className="form">
        <div className="bill">
          <p>Bill</p>
          <span className="dollar"></span>
          <input
            type="number"
            ref={billAmtRef}
            onChange={handleBillAmt}
            autoComplete="off"
            placeholder="0"
          />
        </div>
        <div className="select_tip">
          <p>Select Tip</p>
          <div className="tip_buttons">
            <div className="tip_amount">
              <input
                type="radio"
                onChange={() => setTipSelected(5)}
                name="tip"
              />
              <div
                className={
                  tipSelected === 5 ? "tip_btn tip_btn_selected" : "tip_btn"
                }
              >
                5%
              </div>
            </div>
            <div className="tip_amount">
              <input
                type="radio"
                checked
                onChange={() => setTipSelected(10)}
                name="tip"
              />
              <div
                className={
                  tipSelected === 10 ? "tip_btn tip_btn_selected" : "tip_btn"
                }
              >
                10%
              </div>
            </div>
            <div className="tip_amount">
              <input
                type="radio"
                onChange={() => setTipSelected(15)}
                name="tip"
              />
              <div
                className={
                  tipSelected === 15 ? "tip_btn tip_btn_selected" : "tip_btn"
                }
              >
                15%
              </div>
            </div>
            <div className="tip_amount">
              <input
                type="radio"
                onChange={() => setTipSelected(20)}
                name="tip"
              />
              <div
                className={
                  tipSelected === 20 ? "tip_btn tip_btn_selected" : "tip_btn"
                }
              >
                20%
              </div>
            </div>
            <div className="tip_amount">
              <input
                type="radio"
                onChange={() => setTipSelected(25)}
                name="tip"
              />
              <div
                className={
                  tipSelected === 25 ? "tip_btn tip_btn_selected" : "tip_btn"
                }
              >
                25%
              </div>
            </div>

            <div className="tip_amount">
              <div
                className={customTip ? "tip_btn tip_btn_selected" : "tip_btn"}
              >
                {/* <div className="custom_tip"> */}
                <input
                  type="number"
                  ref={customTipRef}
                  onChange={handleCustom}
                  placeholder="Custom"
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="number_of_people">
          <p>Number of People</p>
          <span className="people_symbol"></span>

          <input
            type="number"
            // ref={setPeopleRef}
            onChange={(e) => setPeople(e.target.value)}
            autoComplete="off"
            placeholder="0"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
