import Main from "./components/Main/Main";
import { Navbar } from "./components/Navbar/navbar";
import Home from "./pages/homePage/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:topic/:difficulty" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
