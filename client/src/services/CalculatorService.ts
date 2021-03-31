import { Sum } from "../models/calculatorFormModel";

export async function getSum(number1: string, number2: string): Promise<Sum> {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      number1,
      number2,
    }),
  });
  return response.json();
}
