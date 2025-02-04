import { Component } from "react";
import { Button, List, Loader } from "..";
import { Person } from "../../types";
import "./style.css";

interface BottomSectionProps {
  loading: boolean;
  data: Person[];
}

interface BottomSectionState {
  hasError: boolean;
}

export class BottomSection extends Component<
  BottomSectionProps,
  BottomSectionState
> {
  constructor(props: BottomSectionProps) {
    super(props);
    this.state = { hasError: false };
  }

  handleMakeError = () => {
    this.setState(() => {
      throw new Error("Произошла ошибка!");
    });
  };

  render() {
    const { loading, data } = this.props;

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
            <Button title="Error Button" onClick={this.handleMakeError} />
          </>
        )}
      </div>
    );
  }
}
