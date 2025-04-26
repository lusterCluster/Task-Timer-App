/**
 * Generates a random number to be used as an ID
 * @param length - The number of digits in the ID (default: 10)
 * @returns A random number with the specified length
 */
export function generateRandomId(length: number = 10): number {
  if (length <= 0) {
    throw new Error("Length must be a positive number");
  }

  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  return Math.floor(min + Math.random() * (max - min + 1));
}

// Example usage:
const randomId = generateRandomId(); // 10-digit number by default
console.log(randomId);

const shortId = generateRandomId(6); // 6-digit number
console.log(shortId);
