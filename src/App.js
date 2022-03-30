import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Users from "./Components/Users/Users";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/foods" element={<Users></Users>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
