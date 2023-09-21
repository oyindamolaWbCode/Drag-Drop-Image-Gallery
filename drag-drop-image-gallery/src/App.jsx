import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Contents/Home";
import Gallery from "./Components/Contents/Gallery";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      {/* <Route path="gallery" element={<Gallery />} /> */}
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
