import NavBar from "./Components/NavBar";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
