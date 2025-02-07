import { useState } from "react";
import { List, Loader } from "..";
import { Outlet } from "react-router";
import Pagination from "../Pagination/Pagination";
import { Person } from "../../types";
import { characterDetailsService } from "../../apiServices";
import "./style.css";

interface BottomSectionProps {
  loading: boolean;
  heroes: Person[];
  changePage: (page: number) => void;
  page: number;
  count: number;
}

export const BottomSection = (props: BottomSectionProps) => {
  const [state, setState] = useState({
    selectedCharacter: {},
    isFetchingCharacter: false,
  });

  const { loading, heroes, changePage, page, count } = props;

  const fetchCharacterDetails = (characterUrl: string) => {
    setState({ ...state, isFetchingCharacter: true });

    characterDetailsService.fetchCharacterDetails(characterUrl).then((data) => {
      setState({
        ...state,
        selectedCharacter: data,
        isFetchingCharacter: false,
      });
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bottom-section">
      <h3 className="bottom-section__header">Results</h3>
      {heroes.length === 0 ? (
        <p>No results</p>
      ) : (
        <div className="bottom-section_results">
          <div className="bottom-section__list">
            <List
              fetchCharacterDetails={fetchCharacterDetails}
              heroes={heroes}
            />
            <Pagination count={count} page={page} changePage={changePage} />
          </div>
          <div className="bottom-section__details">
            <Outlet context={heroes} />
          </div>
        </div>
      )}
    </div>
  );
};
