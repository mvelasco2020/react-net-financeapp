import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className=" pt-10 bg-slate-100 min-w-full">
      {searchResult.length > 0 ? (
        searchResult.map((result) => (
          <Card
            onPortfolioCreate={onPortfolioCreate}
            id={result.symbol}
            key={result.symbol}
            data={result}
          ></Card>
        ))
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  );
};

export default CardList;
