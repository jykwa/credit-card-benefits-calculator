import { Formik, FormikErrors } from 'formik';
import * as React from 'react';

import BenefitsForm from './BenefitsForm/BenefitsForm';
import { IFormValues } from './BenefitsInterfaces';
import BenefitsSummary from '../../tables/BenefitsSummaryTable';
import { BENEFITS, QUESTIONS } from '../../../utils/constants';

const initialValues: IFormValues = {
  travelSpend: 0,
  diningSpend: 0,
  nonBonusSpend: 0,
  loungeSpend: 0,
  globalEntryTSA: 0,
  doordashSpend: 0
};

const BenefitsFormContainer = () => {
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
      {formikBag => (
        <>
          <div className='row'>
            <div className='col-sm'>
              <BenefitsForm {...formikBag} />
            </div>

            {/* <div>These are the inputted values: {JSON.stringify(values)}</div> */}

            <div className='col-sm'>
              <div>
                <BenefitsSummary {...formikBag.values} />
                {/* {BenefitsSummary(QUESTIONS, valuesCSR, valuesCSP, values)} */}
              </div>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default BenefitsFormContainer;
