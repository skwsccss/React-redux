/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';

// import { FireBaseContext } from 'components/FireBase';

import useRouter from 'utils/useRouter';
import { login } from 'actions';

import { useSelector } from 'react-redux';

import { withFireBase } from 'components/FireBase';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true
  }
};

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const ForgotPasswordForm = props => {
  const { firebase, store, className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const session = useSelector(state => state.session);
  const userAuth = useSelector(state => state.authUser);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // dispatch(login());
    // console.log(formState);

    // firebase
    //   .doSignInWithEmailAndPassword(formState.values.email, formState.values.password)
    //   .then(loggedInUser => {
    //     // this.setState({ ...INITIAL_STATE });

    //     console.log(loggedInUser);

    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // this.setState({ error });
    //   });
    // router.history.push('/');
    props.firebase
      .doPasswordReset(formState.values.email)
      .then(() => {
        router.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          error={hasError('email')}
          fullWidth
          helperText={hasError('email') ? formState.errors.email[0] : null}
          label="Email address"
          name="email"
          onChange={handleChange}
          value={formState.values.email || ''}
          variant="outlined"
        />
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={!formState.isValid}
        size="large"
        type="submit"
        variant="contained"
      >
        Send
      </Button>
    </form>
  );
};

ForgotPasswordForm.propTypes = {
  className: PropTypes.string
};

export default withFireBase(ForgotPasswordForm);
