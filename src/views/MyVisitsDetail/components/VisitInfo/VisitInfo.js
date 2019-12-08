import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

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

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Listing Details" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow selected>
              <TableCell>Address</TableCell>
              <TableCell>
                <div>{visit.address}</div>
                <div>{visit.city}, {visit.state} {visit.zip}</div>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Listing Agent</TableCell>
              <TableCell>
                <div>{visit.firstname} {visit.lastname}</div>
                <div>Lic# {visit.license}</div>
                <div>{visit.email}</div>
                <div>{visit.phone}</div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Broker</TableCell>
              <TableCell>
                <div>{visit.company}</div>
                <div>#{visit.brokerlicense}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>MLS</TableCell>
              <TableCell>#{visit.mls}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Listing Price</TableCell>
              <TableCell>${visit.listPrice}</TableCell>
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
      {/* <CardActions className={classes.actions}>
        <Button>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <ReceiptIcon className={classes.buttonIcon} />
          Resend invoice
        </Button>
      </CardActions> */}
    </Card>
  );
};

VisitInfo.propTypes = {
  className: PropTypes.string,
  visit: PropTypes.object.isRequired
};

export default VisitInfo;
