// import firebase from 'react-native-firebase'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBdPO5F1eb-QEw_PsSqhp-8eq820FKN4ek',
  authDomain: 'workout-247.firebaseapp.com',
  databaseURL: 'https://workout-247.firebaseio.com/',
  projectId: 'workout-247',
  storageBucket: 'workout-247.appspot.com',
  messagingSenderId: '605643707636',
}

const init = firebase.initializeApp(config)

export default init
