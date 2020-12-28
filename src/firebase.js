import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-2C452hfNWHhtBDlb2Et3tm_1kCami8E",
    authDomain: "clone-1dd81.firebaseapp.com",
    databaseURL: "https://clone-1dd81.firebaseio.com",
    projectId: "clone-1dd81",
    storageBucket: "clone-1dd81.appspot.com",
    messagingSenderId: "768912255076",
    appId: "1:768912255076:web:ace0792ac1b206ceb41771",
    measurementId: "G-PYTGE68WTY"
});

const auth = firebase.auth();

export { auth };