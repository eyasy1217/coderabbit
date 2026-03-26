export function maxFromCsv(csv: string): number {
  const numbers = csv
    .split(",")
    .map((value) => parseFloat(value.trim()))
    .filter((value) => Number.isFinite(value));

  if (numbers.length === 0) {
    throw new Error("no valid numbers in input");
  }

  return Math.max(...numbers);
}
