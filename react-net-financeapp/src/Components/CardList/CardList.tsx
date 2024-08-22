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
    <div>
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
        <p>No result</p>
      )}
    </div>
  );
};

export default CardList;
