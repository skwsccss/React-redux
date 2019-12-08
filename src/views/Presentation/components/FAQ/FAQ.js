import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupportOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  inner: {
    padding: theme.spacing(6, 3),
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto'
  },
  content: {
    marginTop: theme.spacing(6)
  }
}));

const FAQ = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const faqs = [
    {
      title: 'How much does it cost to use the Stringle App?',
      description:
        'The Stringle Guestbook App will always be free to keep track of all your open house visits. We plan to add more features, some of which will be part of a monthly priced offering.'
    },
    {
      title:
        'Does Strigle have a native mobile App?',
      description:
        'Yes! Currently, we offer both a native Apple iOS App and Goolge Android App.'
    }
  ];

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.inner}>
        <Typography
          align="center"
          variant="h3"
        >
          FAQ
        </Typography>
        <div className={classes.content}>
          <List disablePadding>
            {faqs.map(faq => (
              <ListItem key={uuid()}>
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                <ListItemText
                  primary={faq.title}
                  primaryTypographyProps={{ variant: 'h5' }}
                  secondary={faq.description}
                  secondaryTypographyProps={{ variant: 'body1' }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

FAQ.propTypes = {
  className: PropTypes.string
};

export default FAQ;
