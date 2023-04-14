import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import getFirebaseConfig from '../../firebase-config';

import AccountView from '../views/accountView';

import initializeTodo from './appInitializer';

const AuthController = (() => {
  const firebaseConfig = getFirebaseConfig();
  console.log(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  async function signIn() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  function signOutUser() {
    signOut(auth);
  }

  function getProfilePhotoURL() {
    return auth.currentUser && auth.currentUser.photoURL;
  }

  function getUserName() {
    return auth.currentUser && auth.currentUser.displayName;
  }

  function getUserID() {
    return auth.currentUser && auth.currentUser.uid;
  }

  function initializeAuth() {
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const photoURL = getProfilePhotoURL() as string;
        const name = getUserName() as string;
        const userID = getUserID() as string;

        AccountView.showAccountInfo(name, photoURL);
        AccountView.showMainContent();
        initializeTodo(userID);
      } else {
        AccountView.hideAccountInfo();
        AccountView.hideMainContent();
      }
    });

    AccountView.addHandlerLogin(signIn);
    AccountView.addHandlerLogout(signOutUser);
  }

  return {
    signIn,
    signOutUser,
    initializeAuth,
    getUserID,
  };
})();

export default AuthController;
