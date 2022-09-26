export const createDebounce = (debounceFn: () => void, debounceTime: number) => {
  let timeoutId: any = null;
  return () => {
    if (timeoutId) window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(debounceFn , debounceTime);
  };
};

export const getId = () => (
  Math.floor(Math.random() * (Math.floor(Date.now() * Math.random()))).toString()
);

export const dateFormater = (date: Date, separator: "/" | "." | "-") => {
  let day: number | string = date.getDate();
  let month: number | string = date.getMonth() + 1;
  let year: number | string = date.getFullYear();

  // show date and month in two digits; e.g. 3 as 03
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  console.log(day + separator + month + separator + year);

  return day + separator + month + separator + year;
}