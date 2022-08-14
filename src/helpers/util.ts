export const createDebounce = (debounceFn: () => void, debounceTime: number) => {
  let timeoutId: any = null;
  return () => {
    if (timeoutId) window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(debounceFn , debounceTime);
  };
};