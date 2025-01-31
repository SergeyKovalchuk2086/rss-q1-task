import { Component } from "react";
import { Button, Input } from "..";

import "./style.css";

interface State {
  inputValue: string;
}

interface Props {
  handleSearch: (searchValue: string) => void;
}

export class TopSection extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem("inputValue") || "",
    };
  }

  handleInputChange = (value: string) => {
    this.setState({ inputValue: value });
  };

  buttonClick = () => {
    const { inputValue } = this.state;

    const trimmedInput = inputValue.trim();

    if (!trimmedInput) {
      return;
    }

    const { handleSearch } = this.props;
    handleSearch(trimmedInput);
    localStorage.setItem("inputValue", trimmedInput);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="controls">
        <Input inputValue={inputValue} onChange={this.handleInputChange} />
        <Button title="Search" onClick={this.buttonClick} />
      </div>
    );
  }
}
