import { useEffect, useState } from "react";
import { BottomSection, TopSection } from "../../components";
import { searchService } from "../../apiServices";

import "./style.css";
import { useSearchQuery } from "../../hooks/useSearchQuery";
import { LocalStorageKey } from "../../utils/LocalStorageKeys";

const Mainpage = () => {
  const [mainState, setMainState] = useState({
    heroes: [],
    count: 0,
    page: 1,
    loading: false,
  });

  const { loading, heroes, page, count } = mainState;

  const loadData = () => {
    setMainState({ ...mainState, loading: true });

    searchService.fetchData(page).then((data) => {
      setMainState({
        ...mainState,
        count: data.count,
        heroes: data.results,
        loading: false,
      });
    });
  };

  const loadDatabySearch = (searchValue: string) => {
    setMainState({ ...mainState, loading: true });

    searchService.fetchDataBySearch(searchValue).then((data) => {
      setMainState({
        ...mainState,
        count: data.count,
        heroes: data.results,
        loading: false,
      });
    });
  };

  const changePage = (page: number) => {
    setMainState({ ...mainState, page });
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
    <div className="container">
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
