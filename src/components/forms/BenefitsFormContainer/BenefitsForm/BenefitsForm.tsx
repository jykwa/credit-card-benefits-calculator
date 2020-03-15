import { FormikProps } from 'formik';
import * as React from 'react';

import { IFormValues } from '../BenefitsInterfaces';
import { QUESTIONS } from '../../../../utils/constants';

const BenefitsForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}: FormikProps<IFormValues>) => {
  return (
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
        {errors.travelSpend && touched.travelSpend && errors.travelSpend}
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
        {errors.diningSpend && touched.diningSpend && errors.diningSpend}
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
        {errors.nonBonusSpend && touched.nonBonusSpend && errors.nonBonusSpend}
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
        {errors.loungeSpend && touched.loungeSpend && errors.loungeSpend}
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
        {errors.doordashSpend && touched.doordashSpend && errors.doordashSpend}
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
  );
};

export default BenefitsForm;
