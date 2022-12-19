import React, { useEffect, lazy } from "react";
import { Suspense } from "react";
import scrollreveal from "scrollreveal";
import Home from "./components/Home";
import SinglePage from "./components/SinglePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./context/user";

import useAuthListener from "./hooks/use-auth-listener";

const Login = lazy(() => import("./pages/dashboard"));
const SignUp = lazy(() => import("./pages/login"));
const NotFound = lazy(() => import("./pages/not-found"));
const Profile = lazy(() => import("./pages/profile"));

export default function App() {
  let user = useAuthListener();
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route> */}
            <Route path="/cities/:id" element={<SinglePage />}></Route>

            {/* <Route path={ROUTES.LOG_IN} element={<Login />}></Route> */}
            {/* <Route path={ROUTES.SIGN_UP} element={<Signup />}></Route> */}
            <Route path="*" element={<h1>Not found</h1>}></Route>
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
