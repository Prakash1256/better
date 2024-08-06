
import React, { useState } from 'react';


const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [isPreApproved, setIsPreApproved] = useState(false); 

  const calculateMonthlyPayment = (principal, annualInterestRate, years) => {
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;
    return (
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    );
  };

  const principal = homePrice - downPayment;
  const monthlyPayment = calculateMonthlyPayment(principal, interestRate, loanTerm);

  const handlePreApproval = () => {
    
    setIsPreApproved(true);
    setTimeout(() => {
      setIsPreApproved(false);
    }, 3000);
  };

  return (
    <div className="calculator-container">
      <h2>Mortgage Calculator</h2>
      <p>Use our mortgage calculator to get accurate estimates for your monthly mortgage payments and determine if you will be required to have private mortgage insurance (PMI).</p>
      <div className="input-group">
        <label>Home Price</label>
        <input
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Monthly Payment</label>
        <input
          type="text"
          value={`$${monthlyPayment.toFixed(2)}/mo`}
          disabled
        />
      </div>
      <div className="input-group">
        <label>ZIP Code</label>
        <input type="text" placeholder="226004" />
      </div>
      <div className="input-group">
        <label>Down Payment</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
        <span>20%</span>
      </div>
      <div className="input-group">
        <label>Interest Rate</label>
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
        <span>%</span>
      </div>
      <div className="input-group">
        <label>Length of Loan</label>
        <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}>
          <option value={15}>15 years</option>
          <option value={20}>20 years</option>
          <option value={30}>30 years</option>
        </select>
      </div>
      <button className="pre-approve-btn" onClick={handlePreApproval}>
        Get pre-approved
      </button>
      {isPreApproved && (
        <div className="toast">Get pre-approved successfully!</div>
      )}
    </div>
  );
};

export default MortgageCalculator;
