import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyAtjbrsS7CTjewmzC7I7AKL72vBpOxdBcU',
  authDomain: 'ecommerse-df1fb.firebaseapp.com',
  projectId: 'ecommerse-df1fb',
  storageBucket: 'ecommerse-df1fb.appspot.com',
  messagingSenderId: '492221688870',
  appId: '1:492221688870:web:c8f559e4e56919f7b70ae7'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

