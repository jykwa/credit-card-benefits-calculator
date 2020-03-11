import React, { useState } from 'react';
import axios from 'axios';
import { Formik, FormikErrors } from 'formik';
import Table from 'react-bootstrap/Table';

// This is the API for wheretocredit
function MileageCredit() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const url = 'https://www.wheretocredit.com/api/2.0/calculate';
  let requestBody = [
    {
      id: 'abcdxyz',
      ticketingCarrier: 'UA',
      baseFareUSD: 483.9,
      segments: [
        {
          origin: 'SFO',
          destination: 'HKG',
          // departure: "2016-02-04T18:57:00.000Z",
          carrier: 'UA',
          operatingCarrier: 'UA',
          bookingClass: 'W'
          // flightNumber: "472"
        }
      ]
    }
  ];

  function callAPI() {
    axios
      .post(url, requestBody)
      .then(function(response) {
        // handle success
        // console.log(response.data.value);
        setData(response.data.value);
      })
      .catch(function(error) {
        // handle error
        // console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  function parseData(data: any) {
    return data.map((obj: any, index: number) => (
      <div>
        <Table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Airline Code</th>
              <th>Airline</th>
              <th>
                Redeemable Miles Earned <br />
                (Member, Silver, Gold, Platinum, etc.)
              </th>
            </tr>
          </thead>
          <tbody>
            {obj.value.totals.map(
              ({
                id,
                name,
                rdm
              }: {
                id: string;
                name: string;
                rdm: Array<number>;
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{rdm.map(mile => mile + ' ')}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    ));
  }

  function updateRequestBody({
    origin,
    destination,
    carrier,
    bookingClass
  }: {
    origin: string;
    destination: string;
    carrier: string;
    bookingClass: string;
  }) {
    requestBody[0].segments[0].origin = origin;
    requestBody[0].segments[0].destination = destination;
    requestBody[0].segments[0].carrier = carrier;
    requestBody[0].segments[0].bookingClass = bookingClass;

    // callAPI(); // Calls the API, save it to prevent going over the limit
  }

  interface FormValues {
    origin: string;
    destination: string;
    carrier: string;
    bookingClass: string;
  }

  const initialValues: FormValues = {
    origin: '',
    destination: '',
    carrier: '',
    bookingClass: ''
  };

  const error = {
    origin: 'Invalid origin',
    destination: 'Invalid destination',
    carrier: 'Invalid carrier',
    bookingClass: 'Invalid booking class'
  };

  return (
    <div>
      <div className='row'>
        <div className='col-sm'>
          <h3>Find out how many miles you can earn on a revenue fare!</h3>
          <Formik
            initialValues={initialValues}
            validate={(values: FormValues) => {
              let errors: FormikErrors<FormValues> = {};
              if (!values.origin) {
                errors.origin = 'Required';
              } else if (values.origin === '') {
                errors.origin = error.origin;
              }

              if (!values.destination) {
                errors.destination = 'Required';
              } else if (values.destination === '') {
                errors.destination = error.destination;
              }

              if (!values.carrier) {
                errors.carrier = 'Required';
              } else if (values.carrier === '') {
                errors.carrier = error.carrier;
              }

              if (!values.bookingClass) {
                errors.bookingClass = 'Required';
              } else if (values.bookingClass === '') {
                errors.bookingClass = error.bookingClass;
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                updateRequestBody(values);
                callAPI();
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
                <form className='d-flex flex-column' onSubmit={handleSubmit}>
                  <div>
                    <label>Origin (e.g. SFO)</label>
                    <input
                      type='text'
                      name='origin'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.origin}
                    />
                    {errors.origin && touched.origin && errors.origin}
                  </div>

                  <div>
                    <label>Destination (e.g. LAX)</label>
                    <input
                      type='text'
                      name='destination'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.destination}
                    />
                    {errors.destination &&
                      touched.destination &&
                      errors.destination}
                  </div>

                  <div>
                    <label>Carrier (e.g. UA, DL, AA)</label>
                    <input
                      type='text'
                      name='carrier'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.carrier}
                    />
                    {errors.carrier && touched.carrier && errors.carrier}
                  </div>
                  <div>
                    <label>Booking Class (e.g. F, J, Y)</label>
                    <input
                      type='text'
                      name='bookingClass'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bookingClass}
                    />
                    {errors.bookingClass &&
                      touched.bookingClass &&
                      errors.bookingClass}
                  </div>
                  {/*
              prereqs: 5/24, good credit history, no debt, etc. 
              
                sign up bonus, GE, trip delay/baggage insurance, roadside assistance
              
                slider?
                referral links? might need to add disclaimer or something
              */}
                  <button
                    className='btn btn-primary btn-block'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </form>
                {/* <div>These are the inputted values: {JSON.stringify(values)}</div> */}
              </>
            )}
          </Formik>

          {/* <button onClick={callAPI}>Call the API</button> */}
          <p> (Data provided by wheretocredit.com)</p>
        </div>

        <div className='col-sm'>
          <div>{parseData(data)}</div>
        </div>
      </div>
    </div>
  );
}

export default MileageCredit;
