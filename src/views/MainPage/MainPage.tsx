import { Component } from "react";
import { BottomSection, TopSection } from "../../components";
import { searchService } from "../../apiServices";
import { Person } from "../../types";

import "./style.css";

interface MainPageState {
  data: Person[];
  loading: boolean;
}

type MainPageProps = Readonly<object>;

class Mainpage extends Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  loadData() {
    this.setState({ loading: true });

    searchService.fetchData().then((data) => {
      this.setState({ data: data.results, loading: false });
    });
  }

  loadDatabySearch = (searchValue: string) => {
    this.setState({ loading: true });

    searchService.fetchDataBySearch(searchValue).then((data) => {
      this.setState({ data: data.results, loading: false });
    });
  };

  componentDidMount() {
    const inputValue = localStorage.getItem("inputValue");

    if (inputValue) {
      this.loadDatabySearch(inputValue);
    } else {
      this.loadData();
    }
  }

  render() {
    const { loading, data } = this.state;

    return (
      <div className="container">
        <TopSection handleSearch={this.loadDatabySearch} />
        <BottomSection loading={loading} data={data} />
      </div>
    );
  }
}

export default Mainpage;
