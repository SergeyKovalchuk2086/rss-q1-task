import { Component } from "react";

interface InputProps {
  inputValue: string;
  onChange: (value: string) => void;
}

export class Input extends Component<InputProps> {
  render() {
    const { inputValue, onChange } = this.props;

    return (
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tap something"
      />
    );
  }
}
