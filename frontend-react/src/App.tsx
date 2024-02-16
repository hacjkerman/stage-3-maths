import Main from "./components/Main/Main";
import { Navbar } from "./components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
