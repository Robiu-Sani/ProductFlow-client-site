import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../Firebase.config";

export const AuthContext = createContext();

export default function Context({ children }) {
  const GoogleProvider = new GoogleAuthProvider();
  const [loader, setLoader] = useState(true);
  const [loggedUser, setLoggedUser] = useState(null);

  const createUserByEmail = async (email, password) => {
    setLoader(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoader(false);
    }
  };

  const loginUserByEmail = async (email, password) => {
    setLoader(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.error("Error logging in user:", error);
    } finally {
      setLoader(false);
    }
  };

  const loginWithGoogle = async () => {
    // Correct function name
    setLoader(true);
    try {
      const userCredential = await signInWithPopup(auth, GoogleProvider);
      return userCredential;
    } catch (error) {
      console.error("Error logging in with Google:", error);
    } finally {
      setLoader(false);
    }
  };

  const logOut = async () => {
    setLoader(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoader(false);
    }
  };

  const updateUserProfile = async (data) => {
    setLoader(true);
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, data);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoggedUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextData = {
    createUserByEmail,
    updateUserProfile,
    loginUserByEmail,
    loginWithGoogle, // Ensure the function name is correct
    logOut,
    loader,
    loggedUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}
