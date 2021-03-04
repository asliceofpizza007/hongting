export function debounce(func, delay=250) {
  let timer = null;
  return () => {
    let ctx = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(ctx, args);
    }, delay);
  };
}