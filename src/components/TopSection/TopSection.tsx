import { Button, Input } from "..";
import { useSearchQuery } from "../../hooks/useSearchQuery";
import { LocalStorageKey } from "../../utils/LocalStorageKeys";

import "./style.css";

interface Props {
  handleSearch: (searchValue: string) => void;
}

export const TopSection = (props: Props) => {
  const [searchQuery, setSearchQuery] = useSearchQuery(
    LocalStorageKey.searchQuery,
  );

  const handleInputChange = (value: string) => {
    setSearchQuery(value.trim());
  };

  const buttonClick = () => {
    const { handleSearch } = props;
    handleSearch(searchQuery);
  };

  return (
    <div className="controls">
      <Input inputValue={searchQuery} onChange={handleInputChange} />
      <Button onClick={buttonClick}>Search</Button>
    </div>
  );
};
