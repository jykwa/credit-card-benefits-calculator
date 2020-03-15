import React from 'react';
import Table from 'react-bootstrap/Table';

import { IFormValues } from '../../forms/BenefitsFormContainer/BenefitsInterfaces';
import {
  BENEFITS,
  CHASE_SAPPHIRE_PREFERRED,
  CHASE_SAPPHIRE_RESERVE
} from '../../../utils/constants';

const BenefitsSummary = (values: IFormValues) => {
  const valuesCSR = calculateCSR(values);
  const valuesCSP = calculateCSP(values);

  const firstYearValueCSR = valuesCSR.totalValue;
  const firstYearValueCSP = valuesCSP.totalValue;

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
          {console.log(BENEFITS)}
          {console.log(valuesCSR)}
          {Object.keys(BENEFITS).map((key: string, index) => (
            <tr key={index}>
              <td>{BENEFITS[key].question}</td>
              <td>{valuesCSR[key] || 0}</td>
              <td>{valuesCSP[key] || 0}</td>
            </tr>
          ))}
          <tr>
            <td>
              <b>First Year Total Expected Value</b>
            </td>
            <td>{Math.round(firstYearValueCSR) || 0}</td>
            <td>{Math.round(firstYearValueCSP) || 0}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const initialValuesCSR = {
  signupBonus: 0,
  travelCredit: 0,
  travelSpend: 0,
  diningSpend: 0,
  nonBonusSpend: 0,
  loungeSpend: 0,
  globalEntryTSA: 0,
  doordashSpend: 0,
  annualFee: 0,
  totalValue: 0
};

const calculateCSR = (formikValues: IFormValues): { [key: string]: number } => {
  const calculatedValues = { ...initialValuesCSR };

  const {
    travelSpend,
    diningSpend,
    nonBonusSpend,
    loungeSpend,
    globalEntryTSA,
    doordashSpend
  } = formikValues;

  calculatedValues.signupBonus = CHASE_SAPPHIRE_RESERVE.signupBonus;

  calculatedValues.travelCredit = Math.min(
    travelSpend,
    CHASE_SAPPHIRE_RESERVE.travelCredit
  );

  calculatedValues.travelSpend =
    (travelSpend - Math.min(travelSpend, CHASE_SAPPHIRE_RESERVE.travelCredit)) *
    CHASE_SAPPHIRE_RESERVE.travelMultiplier;
  calculatedValues.diningSpend =
    diningSpend * CHASE_SAPPHIRE_RESERVE.diningMultiplier;
  calculatedValues.nonBonusSpend = Math.round(nonBonusSpend * 0.01);
  calculatedValues.loungeSpend = loungeSpend || 0;
  calculatedValues.globalEntryTSA = globalEntryTSA || 0;
  calculatedValues.doordashSpend = doordashSpend || 0;
  calculatedValues.annualFee = -CHASE_SAPPHIRE_RESERVE.annualFee;
  calculatedValues.totalValue = Object.values(calculatedValues).reduce(
    (a, b) => a + b,
    0
  );

  return calculatedValues;
};

const initialValuesCSP = {
  signupBonus: 0,
  travelCredit: 0,
  travelSpend: 0,
  diningSpend: 0,
  nonBonusSpend: 0,
  loungeSpend: 0,
  globalEntryTSA: 0,
  doordashSpend: 0,
  annualFee: 0,
  totalValue: 0
};

const calculateCSP = (formikValues: IFormValues): { [key: string]: number } => {
  const calculatedValues = { ...initialValuesCSP };

  const { travelSpend, diningSpend, nonBonusSpend } = formikValues;

  calculatedValues.signupBonus = CHASE_SAPPHIRE_PREFERRED.signupBonus;

  calculatedValues.travelSpend =
    travelSpend * CHASE_SAPPHIRE_PREFERRED.travelMultiplier;
  calculatedValues.diningSpend =
    diningSpend * CHASE_SAPPHIRE_PREFERRED.diningMultiplier;
  calculatedValues.nonBonusSpend = Math.round(nonBonusSpend * 0.01);
  calculatedValues.annualFee = -CHASE_SAPPHIRE_PREFERRED.annualFee;
  calculatedValues.totalValue = Object.values(calculatedValues).reduce(
    (a, b) => a + b,
    0
  );

  return calculatedValues;
};

export default BenefitsSummary;
