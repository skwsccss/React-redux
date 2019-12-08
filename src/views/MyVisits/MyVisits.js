import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import axios from 'utils/axios';
import { Page, Paginate } from 'components';
import { Header, VisitCard } from './components';
import { withAuthorization } from 'components/Session';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const MyVisits = () => {
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchVisits = () => {
      axios.get('/api/myvisits').then(response => {
        if (mounted) {
          setVisits(response.data.myVisits);
        }
      });
    };

    fetchVisits();

    return () => {
      mounted = false;
    };
  }, []);

  // const handleFilter = () => {};
  // const handleSearch = () => {};

  return (
    <Page
      className={classes.root}
      title="Open House Visits"
    >
      <Header />
      {/* <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      /> */}
      <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {visits.length} Visits found. Page {page + 1} of{' '}
          {Math.ceil(visits.length / rowsPerPage)}
        </Typography>
        {visits.map(visit => (
          <VisitCard
            key={visit.uid}
            visit={visit}
          />
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate pageCount={2} />
      </div>
    </Page>
  );
};

export default withAuthorization(true, false)(MyVisits);
