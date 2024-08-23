import React, { SyntheticEvent } from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

interface Props {
  data: string[];
  onPortfolioItemDelete: (e: SyntheticEvent) => void;
}
const ListPortfolio = ({ data, onPortfolioItemDelete }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {data.length > 0 ? (
          data.map((e) => (
            <PortfolioItem
              data={e}
              key={e}
              onPortfolioItemDelete={onPortfolioItemDelete}
            />
          ))
        ) : (
          <p>No Items</p>
        )}
      </ul>
    </>
  );
};

export default ListPortfolio;
