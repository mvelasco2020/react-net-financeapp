import React, { SyntheticEvent } from "react";

interface Props {
  data: string;
  onPortfolioItemDelete: (e: SyntheticEvent) => void;
}

const PortfolioItem = ({ data, onPortfolioItemDelete }: Props) => {
  return (
      <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/5 sm:w-1/3">
        <p className="pt-6 text-xl font-bold">{data}</p>
        <form onSubmit={onPortfolioItemDelete}>
          <input readOnly={true} hidden={true} value={data}></input>
          <button type="submit" className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-400 hover:text-red-400 hover:bg-white border-red-400">Delete</button>
        </form>
      </div>
  );
};

export default PortfolioItem;
