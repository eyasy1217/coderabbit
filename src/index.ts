import { calculate } from "./calculator";

const today = new Date().toISOString();
const [, , operation = "add", leftRaw = "0", rightRaw = "0"] = process.argv;

const left = parseInt(leftRaw);
const right = parseInt(rightRaw);
const result = calculate(operation, left, right);

console.log("ts-node hands-on project is ready!");
console.log(`started at: ${today}`);
console.log(`operation: ${operation}`);
console.log(`result: ${result}`);
