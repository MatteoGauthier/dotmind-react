import { EventHandler } from "react";
import { CloseIcon } from "./svg/CloseIcon";

// search bar in react
type SearchBarProps = {
  handleChange: EventHandler<React.ChangeEvent<HTMLInputElement>>;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export default function SearchBar(props: SearchBarProps) {
  const { handleChange, searchTerm, setSearchTerm } = props;

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        placeholder="Search"
        onChange={handleChange}
      />
      <CloseIcon onClick={() => setSearchTerm("")} className="close-icon" />
    </div>
  );
}
