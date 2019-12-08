import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  toolbar: {
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  addButton: {
    color: theme.palette.white,
    backgroundColor: colors.grey[600],
    '&:hover': {
      backgroundColor: colors.grey[900]
    }
  },
  qrButton: {
    color: theme.palette.white,
    backgroundColor: colors.grey[600],
    marginLeft: theme.spacing(1),
    '&:hover': {
      backgroundColor: colors.grey[900]
    }
  },
  deleteButton: {
    color: theme.palette.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[900]
    }
  },
  deleteIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Header = props => {
  const { listing, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            LISTING DETAILS
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            {listing.name}
          </Typography>
        </Grid>
        <Grid item>
          
          {/* <Button
            className={classes.addButton}
            variant="contained"
          >
            <DeleteIcon className={classes.deleteIcon} />
            Create New
          </Button> */}

          <Button
            className={classes.qrButton}
            variant="contained"
          >
            {/* <DeleteIcon className={classes.deleteIcon} /> */}
            QR Code
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  listing: PropTypes.object.isRequired
};

export default Header;
