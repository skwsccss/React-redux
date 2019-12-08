import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  options: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: theme.spacing(3)
  },
}));

const ListingsData = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Details" />
      <CardContent>
        {/* <Typography
          gutterBottom
          variant="h6"
        >
          Select Transactions Agent Role
        </Typography> */}
        {/* <Typography variant="body2">
          Choose Agent's role
        </Typography> */}
        <div className={classes.formGroup}>
            <TextField
              fullWidth
              label="Listings Name"
              name="name"
              // onChange={event =>
              //   handleFieldChange(event, 'name', event.target.value)
              // }
              value='{values.name}'
              variant="outlined"
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              fullWidth
              label="Clients Email Address"
              name="name"
              // onChange={event =>
              //   handleFieldChange(event, 'email', event.target.value)
              // }
              value='{values.name}'
              variant="outlined"
            />
          </div>
      </CardContent>
    </Card>
  );
};

ListingsData.propTypes = {
  className: PropTypes.string
};

export default ListingsData;
