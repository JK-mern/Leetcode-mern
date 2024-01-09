import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/sign-in" element = {<SignIn />} />
      <Route path= '/sign-up' element = {<SignUp />} />
      <Route path="/profile" element = {<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
