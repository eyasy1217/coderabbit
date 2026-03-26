import { calculate } from "./calculator";
import { averageFromCsv } from "./average";

const today = new Date().toISOString();
const [, , operation = "add", leftRaw = "0", rightRaw = "0"] = process.argv;

const left = parseInt(leftRaw);
const right = parseInt(rightRaw);
console.log("ts-node hands-on project is ready!");
console.log(`started at: ${today}`);
console.log(`operation: ${operation}`);

try {
  const result =
    operation === "avg" ? averageFromCsv(leftRaw) : calculate(operation, left, right);
  console.log(`result: ${result}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`calculation failed: ${message}`);
  process.exitCode = 1;
}
