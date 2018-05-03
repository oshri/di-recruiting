import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_YOUR_API_KEY,
  databaseURL: `https://${process.env.REACT_APP_YOUR_DATABASE_NAME}.firebaseio.com`,
  projectId: process.env.REACT_APP_YOUR_PROJECT_ID
};

export default firebase.initializeApp(config);

