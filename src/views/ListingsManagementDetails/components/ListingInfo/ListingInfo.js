import React from 'react';
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
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Label } from 'components';

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

const ListingInfo = props => {
  const { listing, className, ...rest } = props;

  const classes = useStyles();

  // const options = ['Canceled', 'Completed', 'Rejected'];

  // const [option, setOption] = useState(options[0]);

  // const handleChange = event => {
  //   event.persist();

  //   setOption(event.target.value);
  // };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Listing info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>
                <div>{listing.client}</div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Email</TableCell>
              <TableCell>
                <div>{listing.clientEmail}</div>
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Phone</TableCell>
              <TableCell>
                <div>(415) 545-6693</div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Price</TableCell>
              <TableCell>
                {listing.listPrice}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
                <div>{listing.street}</div>
                <div>{listing.city}, {listing.state} {listing.zip}</div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>MLS</TableCell>
              <TableCell>#{listing.mls}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>
              <Label
                    color={
                      listing.verified ? colors.green[600] : colors.orange[600]
                    }
                  >
                    {listing.status}
                  </Label>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Date Created</TableCell>
              <TableCell>
                {listing.createdDate}
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
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        {/* <Button>
          <ReceiptIcon className={classes.buttonIcon} />
          Resend invoice
        </Button> */}
      </CardActions>
    </Card>
  );
};

ListingInfo.propTypes = {
  className: PropTypes.string,
  listing: PropTypes.object.isRequired
};

export default ListingInfo;
