import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  alert: {
    marginBottom: theme.spacing(3)
  },
  formGroup: {
    marginBottom: theme.spacing(3)
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  fieldHint: {
    margin: theme.spacing(1, 0)
  },
  tags: {
    marginTop: theme.spacing(1),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  flexGrow: {
    flexGrow: 1
  },
  dateField: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const ListingsAddressDetail = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  // const initialValues = {
  //   name: '',
  //   tag: '',
  //   tags: ['Full-Time', 'ReactJS'],
  //   startDate: moment(),
  //   endDate: moment().add(1, 'day')
  // };

  // const [setValues] = useState({ ...initialValues });

  // const handleFieldChange = (event, field, value) => {
  //   event.persist && event.persist();
  //   setValues(values => ({
  //     ...values,
  //     [field]: value
  //   }));
  // };

  // const handleTagAdd = () => {
  //   setValues(values => {
  //     const newValues = { ...values };

  //     if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
  //       newValues.tags = [...newValues.tags];
  //       newValues.tags.push(newValues.tag);
  //     }

  //     newValues.tag = '';

  //     return newValues;
  //   });
  // };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Listing Address" />
      <Divider />
      <CardContent>
        <form>
          {/* <Alert
            className={classes.alert}
            message="Once you choose the listings name you can’t change it unless you contact customer support."
          /> */}
          {/* <div className={classes.formGroup}>
            <TextField
              fullWidth
              label="Listings Name"
              name="name"
              onChange={event =>
                handleFieldChange(event, 'name', event.target.value)
              }
              value={values.name}
              variant="outlined"
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              fullWidth
              label="Clients Email Address"
              name="name"
              onChange={event =>
                handleFieldChange(event, 'email', event.target.value)
              }
              value={values.name}
              variant="outlined"
            />
          </div>
          <Divider /> */}
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="address"
                // onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="Address 1"
                name="address1"
                // onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                name="City"
                // onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              sm={2}
              xs={12}
            >
              <TextField
                fullWidth
                label="State"
                name="state"
                // onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              sm={3}
              xs={12}
            >
              <TextField
                fullWidth
                label="Zip Code"
                name="zipCode"
                // onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
          </Grid>
          {/* <div className={classes.formGroup}>
            <div className={classes.fieldGroup}>
              <TextField
                className={classes.flexGrow}
                label="Listings Tags"
                name="tag"
                onChange={event =>
                  handleFieldChange(event, 'tag', event.target.value)
                }
                value={values.tag}
                variant="outlined"
              />
              <Button
                className={classes.addButton}
                onClick={handleTagAdd}
                size="small"
              >
                <AddIcon className={classes.addIcon} />
                Add
              </Button>
            </div>
            <Typography
              className={classes.fieldHint}
              variant="body2"
            >
              Tags will be colored depending the technology if the system
              recognises.
            </Typography>
            <div className={classes.tags}>
              {values.tags.map(tag => (
                <Chip
                  deleteIcon={<CloseIcon />}
                  key={tag}
                  label={tag}
                  onDelete={() => handleTagDelete(tag)}
                />
              ))}
            </div>
          </div> */}
          {/* <div className={classes.formGroup}>
            <div className={classes.fieldGroup}>
              <TextField
                className={classes.dateField}
                label="Start Date"
                name="startDate"
                onClick={() => handleCalendarOpen('startDate')}
                value={moment(values.startDate).format('DD/MM/YYYY')}
                variant="outlined"
              />
              <TextField
                className={classes.dateField}
                label="End Date"
                name="endDate"
                onClick={() => handleCalendarOpen('endDate')}
                value={moment(values.endDate).format('DD/MM/YYYY')}
                variant="outlined"
              />
            </div>
          </div> */}
        </form>
      </CardContent>
      {/* <DatePicker
        minDate={calendarMinDate}
        onAccept={handleCalendarAccept}
        onChange={handleCalendarChange}
        onClose={handleCalendarClose}
        open={calendarOpen}
        style={{ display: 'none' }} // Temporal fix to hide the input element
        value={calendarValue}
        variant="dialog"
      /> */}
    </Card>
  );
};

ListingsAddressDetail.propTypes = {
  className: PropTypes.string
};

export default ListingsAddressDetail;
