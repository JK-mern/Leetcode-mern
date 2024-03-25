import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import PrivateRoute from "./Components/PrivateRoute";
import AddProblems from "./Pages/AddProblems";
import Problem from "./Pages/Problem";
import ProblemLibrary from "./Pages/ProblemLibrary";
import Search from "./Pages/Search";
import NotFound from "./Components/NotFound";
import { useSelector } from "react-redux";
import Roadmap from "./Pages/Roadmap";

function App() {

  let { currentUser } = useSelector((state) => state.user); 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<ProblemLibrary />} />
          <Route path="/addproblems" element={<AddProblems />} />
          <Route path="/about" element={<About />} />
          <Route
            path={"/sign-in"}
            element={currentUser ? <ProblemLibrary /> : <SignIn />}
          />
          <Route path="/sign-up"  element={currentUser ? <ProblemLibrary /> : <SignUp />}/>
          <Route path="/search/:pattern" element= {<Search />} />
          <Route path="/roadmap" element = {<Roadmap/>} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/problems/:title" element={<Problem />} />
          </Route>
          <Route path="*" element= {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
