// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAbTi2IcoHbpi21fs1I4d7eFWDvK27OQZE',
	authDomain: 'blogg-proyect.firebaseapp.com',
	projectId: 'blogg-proyect',
	storageBucket: 'blogg-proyect.appspot.com',
	messagingSenderId: '362328679272',
	appId: '1:362328679272:web:63e86604fbad981a1c2cdd',
	measurementId: 'G-33GMXCK095'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//esto vale para autentificar la autentificacion del proyecto
export const auth = getAuth(app);

//tambine creamos un contexto pa poder usarlo en todos lados
export const AuthContext = createContext();

//aqui en db guardamos nuestra base de datos, y su referencia a una collecion, si hubiera masse crean mas

const db = getFirestore(app);

export const blogCollectionreference = collection(db, 'blog-test');

//hay que crear un storage para meter las fotos

export const storage = getStorage(app);
