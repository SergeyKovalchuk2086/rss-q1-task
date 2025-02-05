import { useState } from "react";
import { Button, List, Loader } from "..";
import { Person } from "../../types";
import "./style.css";
import Pagination from "../Pagination/Pagination";

interface BottomSectionProps {
  loading: boolean;
  heroes: Person[];
  changePage: (page: number) => void;
  page: number;
  count: number;
}

export const BottomSection = (props: BottomSectionProps) => {
  const [initialState, setInitialState] = useState({
    hasError: false,
  });

  const handleMakeError = () => {
    console.log("initialState :", initialState);

    setInitialState(() => {
      throw new Error("Произошла ошибка!");
    });
  };

  const { loading, heroes, changePage, page, count } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="results">
      <h2>Results</h2>
      {heroes.length === 0 ? (
        <p>No results</p>
      ) : (
        <>
          <List heroes={heroes} />
          <Pagination count={count} page={page} changePage={changePage} />
          <Button onClick={handleMakeError}>Error Button</Button>
        </>
      )}
    </div>
  );
};
