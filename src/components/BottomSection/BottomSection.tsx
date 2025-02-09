import { Heroes, Loader, Pagination } from "..";
import { Outlet } from "react-router";
import { Person } from "../../types";
import "./style.css";

interface BottomSectionProps {
  loading: boolean;
  heroes: Person[];
  changePage: (page: number) => void;
  page: number;
  count: number;
}

export const BottomSection = (props: BottomSectionProps) => {
  const { loading, heroes, changePage, page, count } = props;

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
            <Heroes heroes={heroes} />
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
