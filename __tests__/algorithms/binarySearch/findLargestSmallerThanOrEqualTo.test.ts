import findLargestSmallerThanOrEqualTo from "./../../../src/app/learn/algorithms/search/binarySearch//findLargestSmallerThanOrEqualTo";

describe("Tìm phần tử lớn nhất lớn hơn hoặc bằng một giá trị cho trước", () => {
  it('findElement should return the index of the largest element smaller than or equal to target', () => {
    expect(findLargestSmallerThanOrEqualTo([1, 3, 5, 7, 9], 6)).toBe(2);
    expect(findLargestSmallerThanOrEqualTo([1, 3, 5, 7, 9], 4)).toBe(1);
    expect(findLargestSmallerThanOrEqualTo([1, 3, 5, 7, 9], 0)).toBe(-1);
  });

  it('findElement should return -1 if target is smaller than all elements', () => {
    expect(findLargestSmallerThanOrEqualTo([1, 3, 5, 7, 9], -1)).toBe(-1);
  });

  it('findElement should return the last index if target is greater than all elements', () => {
    expect(findLargestSmallerThanOrEqualTo([1, 3, 5, 7, 9], 10)).toBe(4);
  });

  it('findElement should work with empty array', () => {
    expect(findLargestSmallerThanOrEqualTo([], 3)).toBe(-1);
  });

  it('findElement should work with a single element array', () => {
    expect(findLargestSmallerThanOrEqualTo([5], 5)).toBe(0);
    expect(findLargestSmallerThanOrEqualTo([5], 3)).toBe(-1);
    expect(findLargestSmallerThanOrEqualTo([5], 6)).toBe(0);
  });

  it('findElement should work with negative numbers', () => {
    expect(findLargestSmallerThanOrEqualTo([-2, -1, 0, 1, 2], -1)).toBe(1);
  });

  it('findElement should work with array containing duplicates', () => {
    expect(findLargestSmallerThanOrEqualTo([1, 3, 3, 5, 7], 4)).toBe(2);
  });

  it('findElement should work with array containing only one element that is equal to target', () => {
    expect(findLargestSmallerThanOrEqualTo([5], 5)).toBe(0);
  });

  it('findElement should work with array containing only one element that is greater than target', () => {
    expect(findLargestSmallerThanOrEqualTo([5], 3)).toBe(-1);
  });

  it('findElement should work with array containing only one element that is smaller than target', () => {
    expect(findLargestSmallerThanOrEqualTo([5], 6)).toBe(0);
  });

  it('findElement should work with large array', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i);
    expect(findLargestSmallerThanOrEqualTo(largeArray, 5000)).toBe(5000);
  });
})
