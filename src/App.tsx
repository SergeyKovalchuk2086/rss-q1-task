import { Routes, Route } from "react-router";
import Mainpage from "./views/MainPage/MainPage";
import NotFound from "./views/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
