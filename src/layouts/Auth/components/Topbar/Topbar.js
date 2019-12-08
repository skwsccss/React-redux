import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
// import InputIcon from '@material-ui/icons/LockOutlined';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  loginButton: {
    marginLeft: 20
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  flexGrow: {
    flexGrow: 1
  },
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo--white.svg"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
          <Button
              className={classes.searchButton}
              // onClick={handlePricingOpen}
              variant="contained"
              component={RouterLink}
              to={'/visit'}
            >
              {/* <SearchIcon className={classes.trialIcon} /> */}
              Find Listings
            </Button>
          <Button
            className={classes.loginButton}
            color="inherit"
            component={RouterLink}
            to={'/auth/login'}
          >
            {/* <InputIcon className={classes.logoutIcon} /> */}
            Login
          </Button>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
