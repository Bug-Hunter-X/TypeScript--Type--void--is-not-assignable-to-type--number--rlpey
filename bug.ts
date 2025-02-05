function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return;
}

printNumbers2(5); // This also works fine

function printNumbers3(n: number): number {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return n; // Error: Type 'void' is not assignable to type 'number'.
}

printNumbers3(5); // This gives an error because the function is declared to return a number, but doesn't return anything in the for loop