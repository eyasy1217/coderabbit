export function maxFromCsv(csv: string): number {
  const numbers = csv.split(",").map((value) => parseFloat(value));
  return Math.max(...numbers);
}
