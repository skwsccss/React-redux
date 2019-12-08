import React, {Component} from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import Firebase, { FireBaseContext } from './components/FireBase';
import { withAuthentication } from './components/Session';

import theme from './theme';
import { configureStore } from './store';
import routes from './routes';
import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification
} from './components';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';

const history = createBrowserHistory();
const store = configureStore();

class App extends Component {
  render() {
    return (
      <FireBaseContext.Provider value={new Firebase()}>
        <StoreProvider store={store}>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Router history={history}>
                <ScrollReset />
                <GoogleAnalytics />
                <CookiesNotification />
                <Content2 />
              </Router>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </StoreProvider>
      </FireBaseContext.Provider>
    );
  }
};

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      if(authUser) {
        this.setState({ authUser })
      } else {
        this.setState({ authUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return renderRoutes(routes)
  }
}

const Content2 = withAuthentication(Content);

export default App;
