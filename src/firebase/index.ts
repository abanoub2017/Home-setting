// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyDC_PQDdJEhWgZDG8jvesi1tj55qywF7P8',
  authDomain: 'home-setting-91118.firebaseapp.com',
  projectId: 'home-setting-91118',
  storageBucket: 'home-setting-91118.appspot.com',
  messagingSenderId: '965275669365',
  appId: '1:965275669365:web:3bb15e4be11c2d59c9f93c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    db
}