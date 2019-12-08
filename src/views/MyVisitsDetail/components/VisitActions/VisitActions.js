import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Switch
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const VisitInfo = props => {
  const { visit, className, ...rest } = props;
  console.log(visit);

  const classes = useStyles();

  const [values, setValues] = useState({
    isDisclosures: visit.disclosures,
    isLoan: visit.loan,
    needAgent: false
  });

  const handleChange = event => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    });
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Visit Actions" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
          <TableRow selected>
              <TableCell>Date Visited</TableCell>
              <TableCell>
                <div>{visit.visitdatetime}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Request Disclousres</TableCell>
              <TableCell>
              <Switch
                checked={values.disclosures}
                color="secondary"
                edge="start"
                name="isDisclosures"
                onChange={handleChange}
              />
              <Typography variant="body2">
                Formally request a disclosure package from the listing agent. 
              </Typography>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Loan Required</TableCell>
              <TableCell>
              <Switch
                checked={values.loan}
                color="secondary"
                edge="start"
                name="isLoan"
                onChange={handleChange}
              />
              <Typography variant="body2">
                Assuming you make an offer on the listing, will you require a loan?
              </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Need Agent</TableCell>
              <TableCell>
              <Switch
                checked={values.needAgent}
                color="secondary"
                edge="start"
                name="needAgent"
                onChange={handleChange}
              />
              <Typography variant="body2">
                Are you currently working with an agent?
              </Typography>
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  name="option"
                  onChange={handleChange}
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={option}
                  variant="outlined"
                >
                  {options.map(option => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </TextField>
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button>
          <ReceiptIcon className={classes.buttonIcon} />
          Update
        </Button>
      </CardActions>
    </Card>
  );
};

VisitInfo.propTypes = {
  className: PropTypes.string,
  visit: PropTypes.object.isRequired
};

export default VisitInfo;
