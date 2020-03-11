import { Formik, FormikErrors } from 'formik';
import * as React from 'react';

import BenefitsSummary from '../../tables/BenefitsSummaryTable';
import {
  CHASE_SAPPHIRE_PREFERRED,
  CHASE_SAPPHIRE_RESERVE,
  QUESTIONS
} from '../../../utils/constants';

interface IFormValues {
  travelSpend: number;
  diningSpend: number;
  nonBonusSpend: number;
  loungeSpend: number;
  globalEntryTSA: number;
  doordashSpend: number;
}

const initialValues: IFormValues = {
  travelSpend: 0,
  diningSpend: 0,
  nonBonusSpend: 0,
  loungeSpend: 0,
  globalEntryTSA: 0,
  doordashSpend: 0
};

const BenefitsForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values: IFormValues) => {
        let errors: FormikErrors<IFormValues> = {};
        if (!values.travelSpend) {
          errors.travelSpend = 'Required';
        } else if (values.travelSpend < 0) {
          errors.travelSpend = QUESTIONS.travelSpend.error;
        }

        if (!values.diningSpend) {
          errors.diningSpend = 'Required';
        } else if (values.diningSpend < 0) {
          errors.diningSpend = QUESTIONS.diningSpend.error;
        }

        if (!values.nonBonusSpend) {
          errors.nonBonusSpend = 'Required';
        } else if (values.nonBonusSpend < 0) {
          errors.nonBonusSpend = QUESTIONS.nonBonusSpend.error;
        }

        if (!values.loungeSpend) {
          errors.loungeSpend = 'Required';
        } else if (values.loungeSpend < 0) {
          errors.loungeSpend = QUESTIONS.loungeSpend.error;
        }

        if (!values.globalEntryTSA) {
          errors.globalEntryTSA = 'Required';
        } else if (values.globalEntryTSA < 0) {
          errors.globalEntryTSA = QUESTIONS.globalEntryTSA.error;
        }

        if (!values.doordashSpend) {
          errors.doordashSpend = 'Required';
        } else if (values.doordashSpend < 0) {
          errors.doordashSpend = QUESTIONS.doordashSpend.error;
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));

          // getAnswer(values);

          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <>
          <div className='row'>
            <div className='col-sm'>
              <form className='d-flex flex-column' onSubmit={handleSubmit}>
                <div>
                  <label>{QUESTIONS.travelSpend.question}</label>
                  <input
                    type='number'
                    name='travelSpend'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.travelSpend}
                  />
                  {errors.travelSpend &&
                    touched.travelSpend &&
                    errors.travelSpend}
                </div>

                <div>
                  <label>{QUESTIONS.diningSpend.question}</label>
                  <input
                    type='number'
                    name='diningSpend'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.diningSpend}
                  />
                  {errors.diningSpend &&
                    touched.diningSpend &&
                    errors.diningSpend}
                </div>

                <div>
                  <label>{QUESTIONS.nonBonusSpend.question}</label>
                  <input
                    type='number'
                    name='nonBonusSpend'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nonBonusSpend}
                  />
                  {errors.nonBonusSpend &&
                    touched.nonBonusSpend &&
                    errors.nonBonusSpend}
                </div>
                <div>
                  <label>{QUESTIONS.loungeSpend.question}</label>
                  <input
                    type='number'
                    name='loungeSpend'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.loungeSpend}
                  />
                  {errors.loungeSpend &&
                    touched.loungeSpend &&
                    errors.loungeSpend}
                </div>

                <div>
                  <label>{QUESTIONS.globalEntryTSA.question}</label>
                  <input
                    type='number'
                    name='globalEntryTSA'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.globalEntryTSA}
                  />
                  {errors.globalEntryTSA &&
                    touched.globalEntryTSA &&
                    errors.globalEntryTSA}
                </div>

                <div>
                  <label>{QUESTIONS.doordashSpend.question}</label>
                  <input
                    type='number'
                    name='doordashSpend'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.doordashSpend}
                  />
                  {errors.doordashSpend &&
                    touched.doordashSpend &&
                    errors.doordashSpend}
                </div>
                {/*
              prereqs: 5/24, good credit history, no debt, etc. 
              
                sign up bonus, GE, trip delay/baggage insurance, roadside assistance
              
                slider?
                referral links? might need to add disclaimer or something
              */}
                {/* <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button> */}
                <br />
                {/* <h4>{getAnswer(values)}</h4> */}
              </form>
            </div>

            {/* <div>These are the inputted values: {JSON.stringify(values)}</div> */}

            <div className='col-sm'>
              <div>
                <BenefitsSummary
                  benefits={QUESTIONS}
                  firstYearValueCSP={calculateCSP(values)}
                  firstYearValueCSR={calculateCSR(values)}
                  valuesCSP={valuesCSP}
                  valuesCSR={valuesCSR}
                />
                {/* {BenefitsSummary(QUESTIONS, valuesCSR, valuesCSP, values)} */}
              </div>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

function getAnswer(values: {
  travelSpend: any;
  diningSpend: any;
  nonBonusSpend: any;
  loungeSpend: any;
  globalEntryTSA: any;
  doordashSpend: any;
}) {
  let valueCSR = calculateCSR(values);
  let valueCSP = calculateCSP(values);

  return `In the first year, CSR will give you an expected value of ${valueCSR} and CSP will give you an expected value of ${valueCSP}`;
}

let valuesCSR = {
  signupBonus: 0,
  travelCredit: 0,
  travelSpend: 0,
  diningSpend: 0,
  nonBonusSpend: 0,
  loungeSpend: 0,
  globalEntryTSA: 0,
  doordashSpend: 0,
  annualFee: 0
};

export function calculateCSR({
  travelSpend,
  diningSpend,
  nonBonusSpend,
  loungeSpend,
  globalEntryTSA,
  doordashSpend
}: {
  travelSpend: number;
  diningSpend: number;
  nonBonusSpend: number;
  loungeSpend: number;
  globalEntryTSA: number;
  doordashSpend: number;
}) {
  valuesCSR.signupBonus = CHASE_SAPPHIRE_RESERVE.signupBonus;

  valuesCSR.travelCredit = Math.min(
    travelSpend,
    CHASE_SAPPHIRE_RESERVE.travelCredit
  );

  valuesCSR.travelSpend =
    (travelSpend - Math.min(travelSpend, CHASE_SAPPHIRE_RESERVE.travelCredit)) *
    CHASE_SAPPHIRE_RESERVE.travelMultiplier;
  valuesCSR.diningSpend = diningSpend * CHASE_SAPPHIRE_RESERVE.diningMultiplier;
  valuesCSR.nonBonusSpend = Math.round(nonBonusSpend * 0.01);
  valuesCSR.loungeSpend = loungeSpend || 0;
  valuesCSR.globalEntryTSA = globalEntryTSA || 0;
  valuesCSR.doordashSpend = doordashSpend || 0;
  valuesCSR.annualFee = -CHASE_SAPPHIRE_RESERVE.annualFee;

  return Object.values(valuesCSR).reduce((a, b) => a + b, 0);
}

let valuesCSP = {
  signupBonus: 0,
  travelCredit: 0,
  travelSpend: 0,
  diningSpend: 0,
  nonBonusSpend: 0,
  loungeSpend: 0,
  globalEntryTSA: 0,
  doordashSpend: 0,
  annualFee: 0
};

export function calculateCSP({
  travelSpend,
  diningSpend,
  nonBonusSpend,
  loungeSpend = 0,
  globalEntryTSA = 0,
  doordashSpend = 0
}: {
  travelSpend: number;
  diningSpend: number;
  nonBonusSpend: number;
  loungeSpend: number;
  globalEntryTSA: number;
  doordashSpend: number;
}) {
  valuesCSP.signupBonus = CHASE_SAPPHIRE_PREFERRED.signupBonus;

  valuesCSP.travelSpend =
    travelSpend * CHASE_SAPPHIRE_PREFERRED.travelMultiplier;
  valuesCSP.diningSpend =
    diningSpend * CHASE_SAPPHIRE_PREFERRED.diningMultiplier;
  valuesCSP.nonBonusSpend = Math.round(nonBonusSpend * 0.01);
  valuesCSP.annualFee = -CHASE_SAPPHIRE_PREFERRED.annualFee;

  return Object.values(valuesCSP).reduce((a, b) => a + b, 0);
}

export default BenefitsForm;
