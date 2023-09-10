"use client"

import React, { useState, useEffect } from 'react';

interface BudgetProps {
  budget: number;
  days: number;
}

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

export default function Budget({ budget, days }: BudgetProps) {
  const [selectedOption, setSelectedOption] = useState<string>('25-25-25-25 Balance');
  const [breakfast, setBreakfast] = useState(0);
  const dailyBudget = budget / days;

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);

    // Calculate Breakfast based on the selected option and daily budget
    const newBreakfast = calculateBreakfast(newSelectedOption, dailyBudget);
    setBreakfast(newBreakfast);
  };

  useEffect(() => {
    // Recalculate Breakfast when the daily budget changes (e.g., when days or budget props change)
    const newBreakfast = calculateBreakfast(selectedOption, dailyBudget);
    setBreakfast(newBreakfast);
  }, [selectedOption, dailyBudget]);

  return (
    <div className="flex flex-col">
      <p>Your budget for {days} days is ₱{budget}</p>
      <p>Daily budget is ₱{isNaN(dailyBudget) ? '0' : dailyBudget.toFixed(2)}</p>

      <label htmlFor="budgetType">Select your budget distribution:</label>
      <select
        className="text-gray-700"
        id="budgetType"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {/* Add your options here */}
      </select>
      <p>Percentage Distribution (Breakfast, Lunch, Dinner, Snack)</p>
      <p>Budget Distribution:</p>
      <p>{selectedOption}</p>
      <p>Breakfast: ₱{breakfast.toFixed(2)}</p>
      <p>Lunch: ₱</p>
      <p>Dinner: ₱</p>
      <p>Snack: ₱</p>
    </div>
  );
}

