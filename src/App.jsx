import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Project from "./Pages/Project";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="project" eleement={<Project/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
