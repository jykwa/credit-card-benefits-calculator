import React from 'react';
import Table from 'react-bootstrap/Table';

interface IBenefitsSummaryProps {
  benefits: any;
  firstYearValueCSP: number;
  firstYearValueCSR: number;
  valuesCSP: any;
  valuesCSR: any;
}

const BenefitsSummary = ({
  benefits,
  firstYearValueCSP,
  firstYearValueCSR,
  valuesCSP,
  valuesCSR
}: IBenefitsSummaryProps) => {
  return (
    <div>
      <Table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Question</th>
            <th>CSR Expected Value</th>
            <th>CSP Expected Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(benefits).map((benefit, index) => (
            <tr key={index}>
              <td>{benefits[benefit].question}</td>
              <td>${valuesCSR[benefit] || 0}</td>
              <td>${valuesCSP[benefit]}</td>
            </tr>
          ))}
          <tr>
            <td>
              <b>First Year Total Expected Value</b>
            </td>
            <td>{Math.round(firstYearValueCSR)}</td>
            <td>{Math.round(firstYearValueCSP)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BenefitsSummary;
