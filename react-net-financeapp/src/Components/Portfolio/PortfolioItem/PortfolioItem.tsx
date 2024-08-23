import React, { SyntheticEvent } from "react";

interface Props {
  data: string;
  onPortfolioItemDelete: (e: SyntheticEvent) => void;
}

const PortfolioItem = ({ data, onPortfolioItemDelete }: Props) => {
  return (
    <>
      <p>{data}</p>
      <form onSubmit={onPortfolioItemDelete}>
        <input readOnly={true} hidden={true} value={data}></input>
        <button type="submit">delete</button>
      </form>
    </>
  );
};

export default PortfolioItem;
