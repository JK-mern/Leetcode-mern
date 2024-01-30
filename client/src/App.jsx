import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Problems from "./Pages/Problems";
import About from "./Pages/About";
import PrivateRoute from "./Components/PrivateRoute";
import AddProblems from "./Pages/AddProblems";
import Problem from "./Pages/Problem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/addproblems" element={<AddProblems />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/problems/:title" element={<Problem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
