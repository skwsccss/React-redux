import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import {
  Header,
  Statistics,
  Notifications,
  Projects,
  Todos
} from './components';
import { Results } from '../ListingsList/components';

import { withAuthorization } from 'components/Session';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  }
}));

const Overview = () => {
  const classes = useStyles();
  const currentuser = useSelector(state => state.authUser);

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Header currentuser={currentuser} />
      <Results />
      <Statistics className={classes.statistics} />
      <Notifications className={classes.notifications} />
      <Projects className={classes.projects} />
      <Todos className={classes.todos} />
    </Page>
  );
};

export default withAuthorization(true, false)(Overview);
