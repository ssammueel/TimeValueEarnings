import React, { useState } from 'react';
import './cm_css/Button.css';
import './cm_css/Year.css';

export const Hour = () => {
  const [amount, setAmount] = useState("");
  const [hours, setHours] = useState("");
  const [err, setErr] = useState("");
  const [results, setResults] = useState({
    hourResult: 0,
    minuteResult: 0,
  });

  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, ''); // Remove commas for plain number
    if (!isNaN(value) && value.length <= 15) { // Validate if value is a number and limit the length
      setAmount(formatNumber(value));
    }
  };

  const handleHoursChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 24) { // Validate if value is a number between 0 and 24
      setHours(value);
    } else {
      setErr("Hours must be between 0 and 24.");
    }
  };

  const calculateResults = () => {
    const numericAmount = parseFloat(amount.replace(/,/g, '')); // Remove commas for calculations
    if (!numericAmount || !hours) {
      setErr("All fields are required.");
      return;
    }

    const hourResult = (numericAmount / hours).toFixed(2);
    const minuteResult = (hourResult / 60).toFixed(2);

    setResults({
      hourResult,
      minuteResult,
    });
  };

  return (
    <div className='main-one'>
      <form className='form' onSubmit={(e) => { e.preventDefault(); calculateResults(); }}>
        <p>Enter Target Amount</p>
        <input
          className='inp'
          type="text"
          placeholder='Amount Target'
          name='Amount'
          value={amount}
          onChange={handleAmountChange}
        />

        <p>Enter Working Hours in a Day</p>
        <input
          className='inp'
          type="number"
          placeholder='Hours to Work in a Day'
          name='hours'
          value={hours}
          onChange={handleHoursChange}
        />
        <p className={`err ${err ? '' : 'hidden'}`}>{err}</p>
        <button className="button-29" type="submit" role="button">Calculate</button>
      </form>

      <div className="part2">
        <div className="results1 form">
          <h3>Your Target Amount is: {amount}</h3>
          <ul className='li'>
            <li><b>Per Hour: </b>{results.hourResult}</li>
            <li><b>Per Minute: </b>{results.minuteResult}</li>
          </ul>
        </div>
        <div className="results1"></div>
      </div>
    </div>
  );
};
