import React, { useState, useEffect } from 'react';
import './cm_css/Button.css';
import './cm_css/Year.css';

export const Year = () => {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [err, setErr] = useState("");
  const [results, setResults] = useState({
    yearResult: 0,
    monthResult: 0,
    weekResult: 0,
    dayResult: 0,
    hourResult: 0,
    minuteResult: 0,
  });

  useEffect(() => {
    if (err) {
      const timer = setTimeout(() => {
        setErr("");
      }, 3000); // 3000 milliseconds = 3 seconds

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
    if (!numericAmount || !years || !days || !hours) {
      setErr("All fields are required.");
      return;
    }
    if (years <= 0 || days <= 0 || hours <= 0) {
      setErr("Values must be greater than zero.");
      return;
    }

    const months = years * 12;
    const yearResult = (numericAmount / years).toFixed(2);
    const monthResult = (numericAmount / months).toFixed(2);
    const weekResult = (monthResult / 4).toFixed(2);
    const dayResult = (weekResult / days).toFixed(2);
    const hourResult = (dayResult / hours).toFixed(2);
    const minuteResult = (hourResult / 60).toFixed(2);

    setResults({
      yearResult,
      monthResult,
      weekResult,
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

          <p>Enter Duration in Years</p>
          <input
            className='inp'
            type="number"
            placeholder='Duration Years'
            name='years'
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />

          <p>Days you work in a week</p>
          <input
            className='inp'
            type="number"
            placeholder='Day To work in Each Week'
            name='weeks'
            value={days}
            onChange={(e) => {
              const value = e.target.value;
              if (value <= 7) {
                setDays(value);
              } else {
                setErr("Days can't exceed 7");
                setDays("");
              }
            }}
          />

          <p>Enter Working Hours in a Day</p>
          <input
            className='inp'
            type="number"
            placeholder='Hours to Work in Day'
            name='Hours'
            value={hours}
            onChange={(e) => {
              const value = e.target.value;
              if (value <= 24) {
                setHours(value);
              } else {
                setErr("Hours cannot exceed 24");
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
              <li><b>Per Year : </b>{amount} / {years} = {results.yearResult}</li>
              <li><b>Per Month : </b>{amount} / {years * 12} = {results.monthResult}</li>
              <li><b>Per Week : </b>{results.monthResult} / 4 = {results.weekResult}</li>
              <li><b>Per Day: </b>{results.weekResult} / {days} = {results.dayResult}</li>
              <li><b>Per Hour : </b>{results.dayResult} / {hours} = {results.hourResult}</li>
              <li><b>Per Minute = </b>{results.hourResult} / 60 = {results.minuteResult}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
