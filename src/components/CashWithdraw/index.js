import React, { Component } from "react";

import "./index.css";

import DenominationItem from "../DenominationItem";

class CashWithdrawl extends Component {
  state = {
    amount: 2000,
  };

  onWithdrawl = (rupees) => {
    this.setState((prevState) => ({ amount: prevState.amount - rupees }));
  };

  render() {
    const { amount } = this.state;
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="sarah-name-container">
            <h1 className="s-styling">S</h1>
            <p className="sarah-name">Sunita Willliams</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <h1 className="rs-in-digits">{amount}</h1>
              <p className="rs-in-words">In Rupees</p>
            </div>
          </div>

          <p className="sarah-name">Withdraw</p>
          <p className="balance-heading-2">CHOOSE SUM (IN RUPEES)</p>
          <DenominationItem withDraw={this.onWithdrawl} />
        </div>
      </div>
    );
  }
}

export default CashWithdrawl;
