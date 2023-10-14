function calculateTax(income: number, taxYear: number = 2022): number {
  if (income > 50_000 && taxYear < 2022) {
    return income * 1.2;
  }
  return income * 0.5;
}

calculateTax(10_2000);
