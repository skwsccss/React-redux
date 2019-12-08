import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import axios from 'utils/axios';
import { CustomerInfo, Invoices, SendEmails, OtherActions } from './components';

import uuid from 'uuid/v1';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  root: {}
}));

let customer123 = {
  name: 'Ketan Patel',
  email: 'kpatel@stringle.net',
  phone: '(415) 123-0977',
  city: 'San Francisco',
  state: 'California',
  country: 'United States',
  zipCode: '240355',
  address1: '535 Market St',
  address2: 'Floor #515',
  iban: '4142 **** **** **** ****',
  autoCC: false,
  verified: true,
  currency: '$',
  invoices: [
    {
      id: uuid(),
      type: 'paid',
      value: 10.0
    },
    {
      id: uuid(),
      type: 'paid',
      value: 15.0
    },
    {
      id: uuid(),
      type: 'due',
      value: 5
    },
    {
      id: uuid(),
      type: 'income',
      value: 10.0
    }
  ],
  vat: 19,
  balance: 0,
  emails: [
    {
      id: uuid(),
      description: 'Order confirmation',
      created_at: moment()
        .subtract(3, 'days')
        .subtract(5, 'hours')
        .subtract(34, 'minutes')
    },
    {
      id: uuid(),
      description: 'Order confirmation',
      created_at: moment()
        .subtract(4, 'days')
        .subtract(11, 'hours')
        .subtract(49, 'minutes')
    }
  ]
};

const Summary = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [customer, setCustomer] = useState();

  useEffect(() => {
    let mounted = true;

    const fetchCustomer = () => {
      setCustomer(customer123);
      axios.get('/api/management/customers/1/summary').then(response => {
        if (mounted) {
          console.log("helpfing");
          setCustomer(customer123);
        }
      });
    };

    fetchCustomer();

    return () => {
      mounted = false;
    };
  }, []);

  if (!customer) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <CustomerInfo customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <SendEmails customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <OtherActions />
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
