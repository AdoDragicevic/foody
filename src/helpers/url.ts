export const getSearchParamsObj = (searchParams: URLSearchParams): Record<string, string> => {
  let obj: Record<string, string> = {};
  for (const [key, val] of searchParams.entries()) {
    obj[key] = val;
  }
  return obj;
};