/**
 * Finds the minimum and maximum sums of subarrays of length 'k' in the given array.
 *
 * @param {number} n - The length of the input array.
 * @param {number[]} arr - The input array.
 * @param {number} k - The length of subarrays.
 * @return {number[]} An array containing the minimum and maximum sums.
 */
const findMinMaxSums = (n, arr, k) => {
  // If k is 0, return the sum of all elements as both min and max sums
  if (k === 0) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0)
    return [totalSum, totalSum]
  }

  // Sort the array in ascending order
  arr.sort((a, b) => a - b)

  // Calculate the minimum sum by discarding the first k elements
  const minSum = arr.slice(k).reduce((acc, num) => acc + num, 0)

  // Calculate the maximum sum by discarding the last k elements
  const maxSum = arr.slice(0, n - k).reduce((acc, num) => acc + num, 0)

  // Return the maximum and minimum sums
  return [maxSum, minSum]
}

import {createInterface} from 'readline'
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter the size of the array (n): ', n => {
  rl.question('Enter the array elements separated by space: ', input => {
    const arr = input.split(' ').map(Number)
    rl.question('Enter the value of k: ', k => {
      const result = findMinMaxSums(n, arr, k)
      console.log('Result:', result)
      rl.close()
    })
  })
})
