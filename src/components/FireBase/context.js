import React from 'react';

const FireBaseContext = React.createContext(null);

export const withFireBase = Component => props => (
    <FireBaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FireBaseContext.Consumer>
);

export default FireBaseContext;