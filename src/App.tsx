import { Routes, Route } from "react-router";
import Mainpage from "./views/MainPage/MainPage";
import NotFound from "./views/NotFound/NotFound";
import { CharacterDetails } from "./components/CharacterDetails/CharacterDetails";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}>
        <Route path=":name" element={<CharacterDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
