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
    <div className="top-section">
      <Input
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <Button onClick={buttonClick} className="search-button">
        Search
      </Button>
    </div>
  );
};
