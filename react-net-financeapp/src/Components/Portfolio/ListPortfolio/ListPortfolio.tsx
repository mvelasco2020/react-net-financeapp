import React, { SyntheticEvent } from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

interface Props {
  data: string[];
  onPortfolioItemDelete: (e: SyntheticEvent) => void;
}
const ListPortfolio = ({ data, onPortfolioItemDelete }: Props) => {
  return (
    <>
      <section id="portfolio" className="p-9">
        <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
          My Portfolio
        </h2>
        <div className="flex flex-wrap p-9">
          {data.length > 0 ? (
            data.map((e) => {
              return (
                <PortfolioItem
                  data={e}
                  key={e}
                  onPortfolioItemDelete={onPortfolioItemDelete}
                />
              );
            })
          ) : (
            <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              Your portfolio is empty.
            </h3>
          )}
        </div>
      </section>
    </>
  );
};

export default ListPortfolio;
