import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import UserNotFound from "./Components/UserNotFound/UserNotFound";
import Posts from "./Components/Posts/Posts";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/user/:id" element={<UserDetails></UserDetails>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":id" element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<UserNotFound></UserNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
