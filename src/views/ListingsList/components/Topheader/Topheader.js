import React from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  summaryButton: {
    backgroundColor: theme.palette.white
  },
  barChartIcon: {
    marginRight: theme.spacing(1)
  },
  image: {
    width: '100%',
    maxHeight: 400
  }
}));

const Topheader = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  // const userAuth = useSelector(state => state.authUser);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Dashboard
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Welcome, Stringle User 

          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
          >
            Here’s a list of your current listings
          </Typography>
          {/* <Button
            className={classes.summaryButton}
            edge="start"
            variant="contained"
          >
            <BarChartIcon className={classes.barChartIcon} />
            View summary
          </Button> */}
        </Grid>
        <Hidden smDown>
          <Grid
            item
            md={6}
          >
            <img
              alt="Cover"
              className={classes.image}
              src="/images/undraw_growth_analytics_8btt.svg"
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

Topheader.propTypes = {
  className: PropTypes.string
};

export default Topheader;
