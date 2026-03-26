export function calculate(operation: string, left: number, right: number): number {
  switch (operation) {
    case "add":
      return left + right;
    case "sub":
      return left - right;
    case "mul":
      return left * right;
    case "div":
      if (right === 0) {
        throw new Error("Division by zero");
      }
      return left / right;
    default:
      throw new Error(`Unrecognized operation: ${operation}`);
  }
}
