import { useEffect, useState } from "react";
import { BottomSection, TopSection } from "../../components";
import { searchService } from "../../apiServices";
import { useSearchQuery } from "../../hooks/useSearchQuery";
import { LocalStorageKey } from "../../utils/LocalStorageKeys";
import { useParams } from "../../hooks/useParams";

import "./style.css";

const Mainpage = () => {
  const [state, setState] = useState({
    heroes: [],
    count: 0,
    page: 1,
    loading: false,
  });

  const { loading, heroes, page, count } = state;

  useParams(String(page));

  const loadData = () => {
    setState({ ...state, loading: true });

    searchService.fetchData(page).then((data) => {
      setState({
        ...state,
        count: data.count,
        heroes: data.results,
        loading: false,
      });
    });
  };

  const loadDatabySearch = (searchValue: string) => {
    setState({ ...state, loading: true });

    searchService.fetchDataBySearch(searchValue).then((data) => {
      setState({
        ...state,
        count: data.count,
        heroes: data.results,
        loading: false,
      });
    });
  };

  const changePage = (page: number) => {
    setState({ ...state, page });
  };

  const [searchQuery] = useSearchQuery(LocalStorageKey.searchQuery);

  useEffect(() => {
    if (searchQuery) {
      loadDatabySearch(searchQuery);
    } else {
      loadData();
    }
  }, [page]);

  return (
    <div className="main">
      <TopSection handleSearch={loadDatabySearch} />
      <BottomSection
        count={count}
        page={page}
        changePage={changePage}
        loading={loading}
        heroes={heroes}
      />
    </div>
  );
};

export default Mainpage;
