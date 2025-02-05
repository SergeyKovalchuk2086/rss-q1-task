import { Routes, Route } from "react-router";
import Mainpage from "./views/MainPage/MainPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}></Route>
    </Routes>
  );
};

export default App;
