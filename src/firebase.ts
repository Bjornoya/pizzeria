import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD7MUZpn-nMj3KcrZqKmf3nEEORuISZFgQ',
  authDomain: 'pizzeria-11844.firebaseapp.com',
  databaseURL: 'https://pizzeria-11844.firebaseio.com',
  projectId: 'pizzeria-11844',
  storageBucket: 'pizzeria-11844.appspot.com',
  messagingSenderId: '477790838892',
  appId: '1:477790838892:web:4e1569820cb44b1689b849',
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb;
