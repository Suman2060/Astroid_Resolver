import { memo } from "react";
import Input from "../../../common/componets/Input";

type SearchBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

const SearchBar = memo(function SearchBar({ search, onSearchChange }: SearchBarProps) {
  return (
    <Input
      id="search"
      name="search"
      type="search"
      value={search}
      placeholder="Search resources..."
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
});

export default SearchBar;


