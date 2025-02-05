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
  return n; // Corrected: Now returns a number
}

printNumbers3(5); // This now works correctly