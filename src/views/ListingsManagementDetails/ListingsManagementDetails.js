import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import axios from 'utils/axios';
import { Page } from 'components';
import { Header, ListingInfo, ListingsItems } from './components';

import { withAuthorization } from 'components/Session';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const ListingsManagementDetails = () => {
  const classes = useStyles();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchListing = () => {
      axios.get('/api/listingsdetails/1').then(response => {
        if (mounted) {
          console.log(response.data.listing);
          setListing(response.data.listing);
        }
      });
    };

    fetchListing();

    return () => {
      mounted = false;
    };
  }, []);

  if (!listing) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Listings Details"
    >
      <Header listing={listing} />
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        <Grid
          item
          md={4}
          xl={3}
          xs={12}
        >
          <ListingInfo listing={listing} />
        </Grid>
        <Grid
          item
          md={8}
          xl={9}
          xs={12}
        >
          <ListingsItems listing={listing} />
        </Grid>
      </Grid>
    </Page>
  );
};

export default withAuthorization(true, false)(ListingsManagementDetails);
