export default function debounce(func: (query: string) => void, wait: number) {
  let timer: ReturnType<typeof setTimeout>;

  function cancelTimer() {
    clearTimeout(timer);
  }

  function debounced(...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), wait);
  }

  debounced.cancel = cancelTimer;
  return debounced;
}
