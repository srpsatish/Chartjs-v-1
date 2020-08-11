import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyDWSiwe9GO9pli8m89RKMdIkYs1jwrdPmo",
    authDomain: "pills-data.firebaseapp.com",
    databaseURL: "https://pills-data.firebaseio.com",
    projectId: "pills-data",
    storageBucket: "pills-data.appspot.com",
    messagingSenderId: "273813075150",
    appId: "1:273813075150:web:84b4ee0f7247547e348c9f",
    measurementId: "G-SYSR58JJGL"
};

firebase.initializeApp(Config);

export default firebase;