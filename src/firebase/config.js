import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import {config} from 'dotenv';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "cs4261-firstprogrammingassign",
  storageBucket: "cs4261-firstprogrammingassign.appspot.com",
  messagingSenderId: "460658260610",
  appId: "1:460658260610:web:fb20a9ab18309c7491529b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
