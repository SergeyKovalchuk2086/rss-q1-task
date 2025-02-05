import { useState } from "react";
import { Button, Input } from "..";

import "./style.css";

interface Props {
  handleSearch: (searchValue: string) => void;
}

export const TopSection = (props: Props) => {
  const [sectionState, setSectionState] = useState({
    inputValue: localStorage.getItem("inputValue") || "",
  });

  const handleInputChange = (value: string) => {
    setSectionState({ inputValue: value });
  };

  const buttonClick = () => {
    const { inputValue } = sectionState;

    const trimmedInput = inputValue.trim();

    if (!trimmedInput) {
      return;
    }

    const { handleSearch } = props;
    handleSearch(trimmedInput);
    localStorage.setItem("inputValue", trimmedInput);
  };

  const { inputValue } = sectionState;

  return (
    <div className="controls">
      <Input inputValue={inputValue} onChange={handleInputChange} />
      <Button onClick={buttonClick}>Search</Button>
    </div>
  );
};
