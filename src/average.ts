export function averageFromCsv(csv: string): number {
  const numbers = csv.split(",").map((value) => parseInt(value.trim()));
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}
