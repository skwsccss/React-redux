import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Divider,
  colors
} from '@material-ui/core';

import axios from 'utils/axios';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const Notifications = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [accountnotications, setAccountnotications] = useState(null);


  useEffect(() => {
    let mounted = true;

    const fetchProfileNotifications = () => {
      axios.get('/api/userprofile/notfications').then(response => {
        if (mounted) {
          console.log(response.data);
          setAccountnotications(response.data.notications);
        }
      });
    };

    fetchProfileNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  if (!accountnotications) {
    return null;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Notifications" />
      <Divider />
      <CardContent>
        <form>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={6}
              sm={6}
              xs={12}
            >
              <Typography
                gutterBottom
                variant="h6"
              >
                System Controls
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
              >
                Control when and how often Stringle sends emails to you.
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={accountnotications.securityEmails}
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Send me security emails"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={accountnotications.systemEmails}/>}
                label="Send system emails"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={accountnotications.news}
                    color="primary"
                    defaultChecked //
                  />
                }
                label="News about Stringle product and features"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={accountnotications.tips}
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Tips on getting more out of your Stringle App"
              />
              {/* <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="News about Stringle product and features"
              /> */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={accountnotications.surveys}
                    color="primary"
                    defaultChecked //
                  />
                }
                label={
                  <Fragment>
                    <Typography variant="body1">Participation in Stringle research surveys</Typography>
                    <Typography variant="caption">
                      We apprecaite feedback on how we're doing. 
                    </Typography>
                  </Fragment>
                }
              />
            </Grid>
            {/* <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                gutterBottom
                variant="h6"
              >
                Chat App
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
              >
                You will recieve emails in your business email address
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Email"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Push notifications"
              />
            </Grid> */}
          </Grid>
        </form>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.saveButton}
          variant="contained"
        >
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
