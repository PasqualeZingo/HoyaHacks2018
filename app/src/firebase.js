import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyA-gYvnHpi9wkbNXyDtKTZw-pHGn_DuHTc",
    authDomain: "hoyahacks2018.firebaseapp.com",
    databaseURL: "https://hoyahacks2018.firebaseio.com",
    projectId: "hoyahacks2018",
    storageBucket: "",
    messagingSenderId: "730886120983"
};
firebase.initializeApp(config);
export default firebase;