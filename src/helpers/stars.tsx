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