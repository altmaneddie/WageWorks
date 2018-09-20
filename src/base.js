import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB5usetQdq1ycsX0MlUlUwA83n5l8lp3Kk",
  authDomain: "wageworkapp-9674c.firebaseapp.com",
  databaseURL: "https://wageworkapp-9674c.firebaseio.com",
  projectId: "wageworkapp-9674c",
  storageBucket: "wageworkapp-9674c.appspot.com",
  messagingSenderId: "585186601219"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
