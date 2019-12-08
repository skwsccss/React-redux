import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

const VisitCard = props => {
  const { visit, className, ...rest } = props;

  const classes = useStyles();

  const disclosureColors = {
    false: colors.red[600],
    true: colors.green[600]
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to="#"
              variant="h5"
            >
              {visit.address}
            </Link>
            <Typography variant="body2">{visit.city}, {visit.state} {visit.zip}</Typography>
            {/* <Typography variant="body2">
              by{' '}
              <Link
                color="textPrimary"
                component={RouterLink}
                to="/management/customers/1"
                variant="h6"
              >
                {visit.firstname}
              </Link>
            </Typography> */}
          </div>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">{visit.mls}</Typography>
          <Typography variant="body2">MLS Number</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {/* {visit.currency} */}
            $
            {visit.listPrice}
          </Typography>
          <Typography variant="body2">Listing price</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">{visit.firstname} {visit.lastname}</Typography>
          <Typography variant="body2">{visit.email}</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(visit.visitdatetime).format('DD MMMM YYYY')}
          </Typography>
          <Typography variant="body2">date visited</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{ color: disclosureColors[visit.disclosures] }}
            variant="h6"
          >
            YES
          </Typography>
          <Typography variant="body2">disclosures requested</Typography>
        </div>
        <div className={classes.actions}>
          <Button
            color="primary"
            component={RouterLink}
            size="small"
            variant="outlined"
            to={'/myvisits/1/details'}
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

VisitCard.propTypes = {
  className: PropTypes.string,
  visit: PropTypes.object.isRequired
};

export default VisitCard;