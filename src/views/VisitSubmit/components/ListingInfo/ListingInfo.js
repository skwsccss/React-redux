import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  colors,
  Switch,
  Typography
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
  },
  chooseButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
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
              <TableCell>Address</TableCell>
              <TableCell>
                <div>{listing.address}</div>
                <div>{listing.city}, {listing.state} {listing.zip}</div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Listing Price</TableCell>
              <TableCell>
                <div>${listing.listPrice}</div>
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
              <TableCell>Listing Agent</TableCell>
              <TableCell>
              <div>{listing.firstname} {listing.lastname}</div>
              <div>{listing.email}</div>
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
            <TableRow >
              <TableCell>MLS</TableCell>
              <TableCell>#{listing.mls}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Disclosures</TableCell>
              <TableCell>
                <Typography variant="h6">Request here</Typography>
                <Typography variant="body2">
                  Select here if you are interested in receiving the disclosure package for the listing.
                </Typography>
                <Switch
                  checked={listing.disclosures}
                  color="secondary"
                  edge="start"
                  name="requestDisclosure"
                  // onChange={handleChange}
                />
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
        <Button
          className={classes.chooseButton}
          // disabled={!valid}
          variant="contained"
          component={RouterLink}
          to={'/'}
        >
          Submit
        </Button>
      </CardActions>
      <Divider />
    </Card>
  );
};

ListingInfo.propTypes = {
  className: PropTypes.string,
  listing: PropTypes.object.isRequired
};

export default ListingInfo;
