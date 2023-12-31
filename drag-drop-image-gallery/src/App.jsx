
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Contents/Home";
//import Gallery from "./Components/Contents/Gallery";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="Home" element={<Home />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
    <div className="the-body">
      <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
