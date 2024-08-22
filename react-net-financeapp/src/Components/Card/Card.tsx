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
  onPortfolioCreate
}: Props): JSX.Element => {
  return (
    <div className="card" id={id}>
      <div className="details">
        <h2>
          {data.name} ({data.symbol})
        </h2>
        <p>{data.currency}</p>
      </div>
      <p className="info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
        assumenda!
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={data.symbol} />
    </div>
  );
};

export default Card;
