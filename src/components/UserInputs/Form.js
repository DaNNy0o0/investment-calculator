import React, { useState } from "react";

import classes from './Form.module.css'

const initialState = {
  "current-savings": 0,
  "yearly-contribution": 0,
  "expected-return": 0,
  "duration": 0,
}

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onCalculate(userInput)
  };

  const handleReset = () => {
    setUserInput(initialState)
  };

  const handleChange = (input, value) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) => handleChange("current-savings", e.target.value)}
            type="number"
            id="current-savings"
            value={userInput['current-savings']}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) =>
              handleChange("yearly-contribution", e.target.value)
            }
            type="number"
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) => handleChange("expected-return", e.target.value)}
            type="number"
            id="expected-return"
            value={userInput['expected-return']}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => handleChange("duration", e.target.value)}
            type="number"
            id="duration"
            value={userInput['duration']}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={handleReset} type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
