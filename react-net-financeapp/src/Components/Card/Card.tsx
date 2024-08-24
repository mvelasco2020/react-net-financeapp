import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  data: CompanySearch;
  id: string;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  data,
  id,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
        <div
          className="flex justify-between flex-row rounded-lg sm:px-4 px-5 md:px-10 pb-10 container mx-auto"
          id={id}
        >
          <div className="details flex flex-col">
            <h2 className="font-bold text-black">
              {data.name} ({data.symbol})
            </h2>
            <p className="text-black">Currency: {data.currency}</p>
          </div>
          <AddPortfolio
            onPortfolioCreate={onPortfolioCreate}
            symbol={data.symbol}
          />
      </div>
    </>
  );
};

export default Card;
