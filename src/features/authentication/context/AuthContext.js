import { createContext, useEffect, useState } from "react";

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

const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const logOut = async () => {
  await signOut(auth);
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const _cachedUser = localStorage.getItem("currentUser");
  let cachedUser = null;
  if (_cachedUser) {
    cachedUser = JSON.parse(_cachedUser);
  }
  const [localUser, setLocalUser] = useState(cachedUser);

  useEffect(() => {
    const _localUser = localStorage.getItem("currentUser");

    if (_localUser) {
      setUser(JSON.parse(_localUser));
      setLocalUser(JSON.parse(_localUser));
    } else {
      setLocalUser(null);
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <authContext.Provider
        value={{
          user: user ?? localUser,
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

export { AuthProvider, authContext };
