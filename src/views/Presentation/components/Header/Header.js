import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';

import { AuthUserContext } from 'components/Session';
import { withAuthentication } from 'components/Session';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  header: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '160px 24px'
    }
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  mediaContainer: {
    margin: '0 auto',
    maxWidth: 1600,
    padding: theme.spacing(0, 2),
    overflow: 'hidden'
  },
  media: {
    width: '100%'
  },
  stats: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
  statsInner: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto'
  }
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <Typography
          align="center"
          gutterBottom
          variant="h1"
        >
          Stringle Guestbook App
        </Typography>
        <Typography
          align="center"
          component="h2"
          variant="subtitle1"
        >
          The leading Real Estate Guestbook App  used by agents and brockers to better manage and track your open house visits.
        </Typography>
        <div className={classes.buttons}>
          <AuthUserContext.Consumer>
            {authUser => (
              authUser
              ? <Button
                color="primary"
                component="a"
                href="/dashboard"
                variant="contained"
              >
                To Dashboard
              </Button>
              : <Button
                color="primary"
                component="a"
                href="/auth/register"
                variant="contained"
              >
                Sign-up today
              </Button>
            )}
          </AuthUserContext.Consumer>
        </div>
      </div>
      {/* <div className={classes.mediaContainer}>
        <img
          alt="Demos"
          className={classes.media}
          src="/images/presentation/header.jpg"
        />
      </div> */}
      <div className={classes.stats}>
        <Grid
          alignItems="center"
          className={classes.statsInner}
          container
          justify="center"
          spacing={3}
        >
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              100,00+
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Open Houses
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              iOS
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Apple iOS App
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              1,000,000+
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Visitors Tracked
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <div>
              <img
                alt="React"
                src="/images/react.png"
              />
            </div>
            <Typography
              color="inherit"
              variant="body2"
            >
              Android App
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default withAuthentication(Header);
