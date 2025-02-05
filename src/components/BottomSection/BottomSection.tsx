import { useState } from "react";
import { Button, List, Loader } from "..";
import { Person } from "../../types";
import "./style.css";
import Pagination from "../Pagination/Pagination";

interface BottomSectionProps {
  loading: boolean;
  data: Person[];
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

  const { loading, data } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="results">
      <h2>Results</h2>
      {data.length === 0 ? (
        <p>No results</p>
      ) : (
        <>
          <List data={data} />
          <Pagination />
          <Button onClick={handleMakeError}>Error Button</Button>
        </>
      )}
    </div>
  );
};
