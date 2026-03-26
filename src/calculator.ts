export function calculate(operation: string, left: number, right: number): number {
  switch (operation) {
    case "add":
      return left + right;
    case "sub":
      return left - right;
    case "mul":
      return left * right;
    case "div":
      return left / right;
    default:
      return 0;
  }
}
