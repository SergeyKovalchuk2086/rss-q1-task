import { useEffect, useState } from "react";
import { BottomSection, TopSection } from "../../components";
import { searchService } from "../../apiServices";

import "./style.css";

const Mainpage = () => {
  const [pageState, setPageState] = useState({
    data: [],
    loading: false,
  });

  const loadData = () => {
    setPageState({ ...pageState, loading: true });

    searchService.fetchData().then((data) => {
      setPageState({ data: data.results, loading: false });
    });
  };

  const loadDatabySearch = (searchValue: string) => {
    setPageState({ ...pageState, loading: true });

    searchService.fetchDataBySearch(searchValue).then((data) => {
      setPageState({ data: data.results, loading: false });
    });
  };

  useEffect(() => {
    const inputValue = localStorage.getItem("inputValue");

    if (inputValue) {
      loadDatabySearch(inputValue);
    } else {
      loadData();
    }
  });

  const { loading, data } = pageState;

  return (
    <div className="container">
      <TopSection handleSearch={loadDatabySearch} />
      <BottomSection loading={loading} data={data} />
    </div>
  );
};

export default Mainpage;
