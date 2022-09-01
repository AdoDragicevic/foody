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