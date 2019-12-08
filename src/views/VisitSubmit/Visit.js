import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import { Page } from 'components';
import gradients from 'utils/gradients';
import { ListingInfo } from './components';

let listing = {
        "uid" : 1,
        "address" : "400 Market St.",
        "brokerlicense" : "01254853",
        "city" : "San Francisco",
        "company" : "Big Reality",
        "email" : "john.k.miller9211@yahoo.com",
        "firstname" : "John",
        "lastname" : "Miller",
        "license" : "30588LP9",
        "phone" : "4153625689",
        "state" : "CA",
        "zip" : "94123",
        mls : "PLOKI899763AED",
        disclosures : true,
        loan : false,
        listPrice : 980000
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  searchForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Visit = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Visit"
    >
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
            <ListingInfo listing={listing} />
        </CardContent>
      </Card>
    </Page>
  );
};

export default Visit;
