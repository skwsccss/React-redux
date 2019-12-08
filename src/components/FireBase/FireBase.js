import app from 'firebase/app'
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB_oaECBfe2NKhqGkywipu43gRSaGUwpxw',
  authDomain: 'stringle-staging.firebaseapp.com',
  databaseURL: 'https://stringle-staging.firebaseio.com',
  projectId: 'stringle-staging',
  storageBucket: 'stringle-staging.appspot.com',
  messagingSenderId: '839052607900',
  appId: '1:839052607900:web:4e3b5e8773f8e210'
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}



export default Firebase;
