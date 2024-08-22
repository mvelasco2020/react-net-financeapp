import { SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { searchCompanies } from "./api";
import { CompanySearch } from "./company";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <div className="App">
        <Search
          search={search}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
        />
        {serverError && <h2>{serverError}</h2>}
        <CardList
          onPortfolioCreate={onPortfolioCreate}
          searchResult={searchResult}
        />
      </div>
    </>
  );
}

export default App;
