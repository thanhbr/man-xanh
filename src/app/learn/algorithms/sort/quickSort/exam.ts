const partition = (arr: number[], low: number, high: number) => {
  const pivot = arr[high];
  let i = low - 1;

  for(let j = low; j < high; j++) {
    if(arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i + 1;
}

export const quickSort = (arr: number[], low: number, high: number) => {
  if(low < high) {
    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}
