import React from 'react'

function calculateBreakfast(selectedOption: string, dailyBudget: number) {
    switch (selectedOption) {
      case "25-25-25-25 Balance":
        return dailyBudget / 4;
      case "30-30-30-10 Balance Less Snack":
        return dailyBudget * 0.3;
      case "15-35-35-15 Lunch & Dinner Focus":
        return dailyBudget * 0.15;
      case "20-30-40-10 Dinner Focus":
        return dailyBudget * 0.2;
      case "20-40-30-10 Lunch Focus":
        return dailyBudget * 0.2;
      case "20-40-40-0 Lunch & Dinner Focus w/ No Snack":
        return dailyBudget * 0.2;
      default:
        return 0; // Default value when none of the options match
    }
  }

export default function Compute() {
  return (
    <div>compute</div>
  )
}
