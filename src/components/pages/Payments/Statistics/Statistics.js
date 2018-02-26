import React from 'react';
import PropTypes from 'prop-types';

import { getDateFromString, getBDTCurrency } from './../../../common';

export const Statistics = ({ statistics=[] }) => (
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Payment Date</th>
        <th scope="col">Payment Amount</th>
        <th scope="col">Submitted By</th>
        <th scope="col">Submitted For</th>
        <th scope="col">Submitter Note</th>
      </tr>
    </thead>
    <tbody>
      { statistics && statistics.map((data, i) => 
        <tr key={data._id}>
          <th scope="row">{i+1}</th>
          <td>{getDateFromString(data.PaymentDate)}</td>
          <td>{getBDTCurrency(data.PaymentAmount)}</td>
          <td>{data.SubmittedBy}</td>
          <td>{data.SubmittedFor}</td>
          <td>{data.SubmitterNote}</td>
        </tr>
      )}
    </tbody>
  </table>
);

Statistics.propTypes = {
  statistics: PropTypes.array
}
