# Find the maximum and minimum possible sums

You are given three arguments:
- `arr` = an `array` of numbers
- `n` = the size of the `array`
- `k` = number of reduced elements

The arguments are passed in the order: `n`, `arr`, `k`.

Your task is to write the function `findMinMaxSums` which computes the maximum and minimum possible sums of the elements in the `array` after having discarded exactly `k` elements. Return these numbers in an `array`: `[max, min]`. You should not use any sorting library functions.

## Example 1

Input:

- `n` = 5
- `arr` = 1 2 3 4 5
- `k` = 1

Logic:

- Remove the lowest number.
- The maximum amount is: 2 + 3 + 4 + 5 = 14.
- Remove the highest number.
- The minimum amount is: 1 + 2 + 3 + 4 = 10.
- Output: 14 10

## Example 2

Input:

- `n` = 3
- `arr` = 5 6 7
- `k` = 2

Logic:

- Remove the two lowest numbers: 7
- Remove the two highest numbers: 5
- Output: 7 5