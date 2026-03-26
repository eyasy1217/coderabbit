export function averageFromCsv(csv: string): number {
  const numbers = csv
    .split(",")
    .map((value) => parseInt(value.trim(), 10))
    .filter((value) => Number.isFinite(value));

  if (numbers.length === 0) {
    throw new Error("no valid numbers in input");
  }

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}
