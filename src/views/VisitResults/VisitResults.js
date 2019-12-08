import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  colors
} from '@material-ui/core';

import { Page } from 'components';

import { 
  Results
} from './components';

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
  chooseButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  content: {
    padding: theme.spacing(4, 4, 3, 4)
  },
  header: {
    marginBottom: theme.spacing(2)
  }
}));

const VisitResults = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Select Listing"
    >
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography
              className={classes.header}
              variant="h3"
            >
              Listings Results
            </Typography>         
            <Results />
          <CardActions>
            <Button
              className={classes.chooseButton}
              // disabled={!valid}
              variant="contained"
              component={RouterLink}
              to={'/visit/submit'}
            >
              Choose Listing
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Page>
  );
};

export default VisitResults;
