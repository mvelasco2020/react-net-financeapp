import { SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { searchCompanies } from "./Api";
import { CompanySearch } from "./company";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [shouldShowCardList, setShouldShowCardList] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const query = `${search}&exchange=NASDAQ&exchange=NYSE`;
    const result = await searchCompanies(query);

    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    setShouldShowCardList(true);
  };

  const onPortfolioCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = (e.target as HTMLFormElement)
      .elements[0] as HTMLInputElement;
    if (portfolioValues.find((item) => item === inputElement.value)) {
      return;
    }
    const updatedPortfolio = [...portfolioValues, inputElement.value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioItemDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = (e.target as HTMLFormElement)
      .elements[0] as HTMLInputElement;
    setPortfolioValues(
      portfolioValues.filter((item) => item !== inputElement.value)
    );
  };
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Search
          search={search}
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
        />
        {serverError && <h2>{serverError}</h2>}
        {portfolioValues.length > 0 && (
          <ListPortfolio
            data={portfolioValues}
            onPortfolioItemDelete={onPortfolioItemDelete}
          />
        )}
        {shouldShowCardList && (
          <CardList
            onPortfolioCreate={onPortfolioCreate}
            searchResult={searchResult}
          />
        )}

      </div>
    </>
  );
}

export default App;
