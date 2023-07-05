import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { auth } from "services/firebase";

const authContext = createContext();

const signUp = async ({ firstName, lastName, email, password }) => {
  await createUserWithEmailAndPassword(auth, email, password);

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      unsubscribe();
    }
  });
};

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
  signOut(auth);
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <authContext.Provider
        value={{
          user,
          signUp,
          login,
          logOut,
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
}

const useAuth = () => {
  return useContext(authContext);
};

export { AuthProvider, useAuth };
