import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  options: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: theme.spacing(2)
  }
}));

// const roles = ['Listing Agent', 'Buyer Agent'];

const ListingsDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
        
        <Grid
          container
          spacing={2}>
            <Grid
              sm={12}
              item>
                <form>
                  <CardHeader title="Listing Details" />
                  <Divider />
                  <CardContent>
                    <Grid
                      container
                      spacing={4}
                    >
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          helperText="Enter a friendly Name for your Listing"
                          label="Listing Name"
                          name="listingName"
                          // onChange={}
                          required
                          // value={values.firstName}
                          variant="outlined"
                        />
                      </Grid>
                      {/* <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Client's Email Address"
                          name="clientsEmail"
                          // onChange={handleChange}
                          required
                          // value={values.lastName}
                          variant="outlined"
                        />
                      </Grid> */}
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Listing Price"
                          name="listingPrice"
                          // onChange={handleChange}
                          required
                          value='$900,000'
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="MLS Number"
                          name="mls"
                          // onChange={handleChange}
                          required
                          value='MLPP900-09DF'
                          variant="outlined"
                        />
                      </Grid>
                      {/* <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          // label="Select Role"
                          name="state"
                          helperText="Select the Agent's Role"
                          // onChange={}
                          select
                          // eslint-disable-next-line react/jsx-sort-props
                          SelectProps={{ native: true }}
                          // value={values.state}
                          variant="outlined"
                        >
                          {roles.map(state => (
                            <option
                              key={state}
                              value={state}
                            >
                              {state}
                            </option>
                          ))}
                        </TextField>
                      </Grid> */}
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          helperText="The default role for all new Lisitngs created"
                          label="Agent Role"
                          defaultValue="Listing Agent"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="outlined"
                        />
                      </Grid>
                      {/* <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <Typography variant="h6">Make Contact Info Public</Typography>
                        <Typography variant="body2">
                          Means that anyone viewing your profile will be able to see your
                          contacts details
                        </Typography>
                        <Switch
                          checked={values.isPublic}
                          color="secondary"
                          edge="start"
                          name="isPublic"
                          onChange={handleChange}
                        />
                      </Grid> */}
                      {/* <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <Typography variant="h6">Available to hire</Typography>
                        <Typography variant="body2">
                          Toggling this will let your teamates know that you are available
                          for acquireing new projects
                        </Typography>
                        <Switch
                          checked={values.canHire}
                          color="secondary"
                          edge="start"
                          name="canHire"
                          onChange={handleChange}
                        />
                      </Grid> */}
                    </Grid>
                  </CardContent>
                </form>
            </Grid>
        </Grid>
        
    </Card>
  );
};

ListingsDetails.propTypes = {
  className: PropTypes.string
};

export default ListingsDetails;
