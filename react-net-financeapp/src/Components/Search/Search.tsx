import React from "react";

interface Props {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  search: string;
}
const Search: React.FC<Props> = ({handleSearchChange,handleSearchSubmit,search}: Props): JSX.Element => {
  return (
    <>
      <form onSubmit={handleSearchSubmit}>
      <input value={search} onChange={(e) => handleSearchChange(e)}></input>
      </form>
    </>
  );
};

export default Search;
