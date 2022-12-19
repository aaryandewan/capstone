import { useState, useEffect, useContext } from "react";
// import FirebaseContext from "../context/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("firebaseUser"))
  );

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("use-auth hook, uid = ", uid);

        localStorage.setItem("firebaseUser", JSON.stringify(user));
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    //TODO: Remove the listener [maybe it slows down your app]
  }, []);

  return { user };
}
