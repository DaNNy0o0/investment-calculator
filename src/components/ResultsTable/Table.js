import React from "react";

import classes from './Table.module.css'


const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const Table = ({ data, initialInvestment }) => {

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.savingsEndOfYear)}</td>
            <td>{formatter.format(result.yearlyInterest)}</td>
            <td>{formatter.format(result.savingsEndOfYear - initialInvestment - result.yearlyContribution * result.year)}</td>
            <td>{formatter.format(initialInvestment + result.yearlyContribution * result.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
