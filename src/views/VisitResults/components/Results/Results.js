import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Radio,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  option: {
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    maxWidth: 560,
    '& + &': {
      marginTop: theme.spacing(2)
    }
  },
  selectedOption: {
    backgroundColor: colors.grey[50]
  },
  optionRadio: {
    margin: -10
  },
  optionDetails: {
    marginLeft: theme.spacing(2)
  }
}));

const AboutAuthor = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState('freelancer');

  const handleChange = (event, option) => {
    setSelected(option.value);
  };

  const options = [
    {
      "value": 1,
      "city" : "San Francisco",
      "county" : "San Francisco County",
      "listPrice" : 980000,
      "mls" : "12345678",
      "neigborhood" : "Russian Hill",
      "state" : "CA",
      "street" : "66 Macondray Ln",
      "zip" : "94133"
    },
    {
      "value": 2,
      "city" : "San Francisco",
      "county" : "San Francisco County",
      "listPrice" : 1200000,
      "mls" : "1234LPL00",
      "neigborhood" : "Downtown SF",
      "state" : "CA",
      "street" : "2345 Market St",
      "zip" : "93278"
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Please choose the listing below" />
      <CardContent>
        {options.map(option => (
          <div
            className={clsx(classes.option, {
              [classes.selectedOption]: selected === option.value
            })}
            key={option.value}
          >
            <Radio
              checked={selected === option.value}
              className={classes.optionRadio}
              color="primary"
              onClick={event => handleChange(event, option)}
            />
            <div className={classes.optionDetails}>
              <Typography
                gutterBottom
                variant="h5"
              >
                {option.street}
              </Typography>
              <Typography variant="body1">{option.city}, {option.state} {option.zip}</Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

AboutAuthor.propTypes = {
  className: PropTypes.string
};

export default AboutAuthor;
