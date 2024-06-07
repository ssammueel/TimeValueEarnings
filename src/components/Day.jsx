import React, { useState, useEffect } from 'react';
import './cm_css/Button.css';
import './cm_css/Year.css';

export const Day = () => {
  const [amount, setAmount] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [err, setErr] = useState("");
  const [results, setResults] = useState({
    dayResult: 0,
    hourResult: 0,
    minuteResult: 0,
  });

  useEffect(() => {
    if (err) {
      const timer = setTimeout(() => {
        setErr("");
      }, 2000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [err]);

  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, ''); // Remove commas for plain number
    if (!isNaN(value) && value.length <= 15) { // Validate if value is a number and limit the length
      setAmount(formatNumber(value));
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount.replace(/,/g, '')); // Remove commas for calculations
    const numericDays = parseFloat(days);
    const numericHours = parseFloat(hours);

    if (!numericAmount || !numericDays || !numericHours) {
      setErr("All fields are required.");
      return;
    }
    if (numericAmount <= 0 || numericDays <= 0 || numericHours <= 0) {
      setErr("Values must be greater than zero.");
      return;
    }

    const dayResult = (numericAmount / numericDays).toFixed(2);
    const hourResult = (dayResult / numericHours).toFixed(2);
    const minuteResult = (hourResult / 60).toFixed(2);

    setResults({
      dayResult,
      hourResult,
      minuteResult,
    });
  };

  return (
    <>
      <div className='main-one'>
        <form className='form' onSubmit={handleCalculate}>
          <p>Enter Target Amount</p>
          <input
            className='inp'
            type="text"
            placeholder='Amount Target'
            name='Amount'
            value={amount}
            onChange={handleAmountChange}
          />

          <p>Days to work</p>
          <input
            className='inp'
            type="number"
            placeholder='Days to work'
            name='days'
            value={days}
            onChange={(e) => {
              const value = e.target.value;
              if (value <= 366) {
                setDays(value);
              } else {
                setErr("Your days are more than a year.");
                setDays("");
              }
            }}
          />

          <p>Enter Working Hours in a Day</p>
          <input
            className='inp'
            type="number"
            placeholder='Hours to work in a day'
            name='hours'
            value={hours}
            onChange={(e) => {
              const value = e.target.value;
              if (value <= 24) {
                setHours(value);
              } else {
                setErr("Hours cannot exceed 24.");
                setHours("");
              }
            }}
          />
          <p className={`err ${err ? '' : 'hidden'}`}>{err}</p>
          <button className="button-29" type="submit" role="button">Calculate</button>
        </form>

        <div className="part2">
          <div className="results1 form">
            <h3>Your Target Amount is: {amount}</h3>
            <ul className='li'>
              <li><b>Per Day: </b>{amount} / {days} = {results.dayResult}</li>
              <li><b>Per Hour : </b>{results.dayResult} / {hours} = {results.hourResult}</li>
              <li><b>Per Minute : </b>{results.hourResult} / 60 = {results.minuteResult}</li>
            </ul>
          </div>
          <div className="results1"></div>
        </div>
      </div>
    </>
  );
};
