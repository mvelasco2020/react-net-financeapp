import React from "react";

interface Props {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => void;
  search: string;
}
const Search: React.FC<Props> = ({
  handleSearchChange,
  handleSearchSubmit,
  search,
}: Props): JSX.Element => {
  return (
    <section className="relative bg-gray-100 min-w-full">
    <div className="py-10 container mx-auto">
      <form
        className="px-5 sm:px-2 md:px-9"
        onSubmit={handleSearchSubmit}
      >
        <input
          className=" min-w-full flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
          id="search-input"
          placeholder="Search companies by name OR ticker symbol (i.e. AAPL apple)"
          value={search}
          onChange={handleSearchChange}
        ></input>
      </form>
    </div>
  </section>
  );
};

export default Search;
