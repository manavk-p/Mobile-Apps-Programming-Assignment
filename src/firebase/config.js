import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import {REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN} from '@env';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "cs4261-firstprogrammingassign",
  storageBucket: "cs4261-firstprogrammingassign.appspot.com",
  messagingSenderId: "460658260610",
  appId: "1:460658260610:web:fb20a9ab18309c7491529b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
