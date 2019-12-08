import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import axios from 'utils/axios';
import { Page } from 'components';
import { Header, VisitInfo, VisitActions } from './components';
import { withAuthorization } from 'components/Session';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const MyVisitsDetail = () => {
  const classes = useStyles();
  const [visit, setVisit] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchVisits = () => {
      axios.get('/api/visit/1').then(response => {
        if (mounted) {
          setVisit(response.data.visitDetails);
        }
      });
    };

    fetchVisits();

    return () => {
      mounted = false;
    };
  }, []);


  return (
    <Page
      className={classes.root}
      title="Open House Visits"
    >
      <Header />
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        <Grid
          item
          md={7}
          xs={12}
        >
          <VisitInfo visit={visit}/>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
        >
          <VisitActions visit={visit}/>
        </Grid>
      </Grid>
    </Page>
  );
};

export default withAuthorization(true, false)(MyVisitsDetail);
