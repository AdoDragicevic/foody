import { ReactNode } from "react";


export const getHtmlStars = (numOfStars: number, numOfFilled: number) => {
  if (numOfFilled > numOfStars) throw new Error();
  let stars: ReactNode[] = [];
  for (let i = 0; i < numOfStars; i++) {
    let star = i < numOfFilled ? <span key={i}>&#x2605;</span> : <span key={i}>&#9734;</span>;
    stars.push(star);   
  }
  return stars;
};

export const getHtmlDollars = (numOfDollars: number, numOfFilled: number, fillClassName: string, emptyClassName: string) => {
  if (numOfFilled > numOfDollars) throw new Error();
  const dollars: ReactNode[] = [];

  for (let i = 1; i <= numOfDollars; i++) {
    const css = `${i <= numOfFilled ? fillClassName : emptyClassName}`;
    dollars.push( <span className={css}>$</span> );
  }

  return dollars;
};