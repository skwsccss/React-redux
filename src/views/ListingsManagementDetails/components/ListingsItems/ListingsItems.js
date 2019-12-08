import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';
import { Label } from 'components';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  }
}));

const ListingsItems = props => {
  const { listing, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Visitors History" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Disclosures</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listing.visitors.map(item => (
                  <TableRow key={item.uid}>
                    <TableCell> {item.fName} {item.lName} </TableCell>
                    <TableCell>
                      {item.email}
                        <div>
                          <Label
                            color={ colors.green[600] }
                          >
                            {item.isAgent
                              ? 'Agent'
                              : 'not Agent'}
                          </Label>
                        </div>
                    </TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>
                      {moment(item.timeStamp).format('DD MMMM YYYY')}
                    </TableCell>
                    <TableCell>{item.wantsDisclosure} Yes</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

ListingsItems.propTypes = {
  className: PropTypes.string,
  listing: PropTypes.object.isRequired
};

export default ListingsItems;
