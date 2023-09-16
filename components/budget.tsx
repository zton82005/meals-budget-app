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

function calculateLunch(selectedOption: string, dailyBudget: number) {
  switch (selectedOption) {
    case "25-25-25-25 Balance":
      return dailyBudget / 4;
    case "30-30-30-10 Balance Less Snack":
      return dailyBudget * 0.3;
    case "15-35-35-15 Lunch & Dinner Focus":
      return dailyBudget * 0.35;
    case "20-30-40-10 Dinner Focus":
      return dailyBudget * 0.3;
    case "20-40-30-10 Lunch Focus":
      return dailyBudget * 0.4;
    case "20-40-40-0 Lunch & Dinner Focus w/ No Snack":
      return dailyBudget * 0.4;
    default:
      return 0; // Default value when none of the options match
  }
}

function calculateDinner(selectedOption: string, dailyBudget: number) {
  switch (selectedOption) {
    case "25-25-25-25 Balance":
      return dailyBudget / 4;
    case "30-30-30-10 Balance Less Snack":
      return dailyBudget * 0.3;
    case "15-35-35-15 Lunch & Dinner Focus":
      return dailyBudget * 0.35;
    case "20-30-40-10 Dinner Focus":
      return dailyBudget * 0.4;
    case "20-40-30-10 Lunch Focus":
      return dailyBudget * 0.3;
    case "20-40-40-0 Lunch & Dinner Focus w/ No Snack":
      return dailyBudget * 0.4;
    default:
      return 0; // Default value when none of the options match
  }
}

function calculateSnack(selectedOption: string, dailyBudget: number) {
  switch (selectedOption) {
    case "25-25-25-25 Balance":
      return dailyBudget / 4;
    case "30-30-30-10 Balance Less Snack":
      return dailyBudget * 0.10;
    case "15-35-35-15 Lunch & Dinner Focus":
      return dailyBudget * 0.15;
    case "20-30-40-10 Dinner Focus":
      return dailyBudget * 0.10;
    case "20-40-30-10 Lunch Focus":
      return dailyBudget * 0.1;
    case "20-40-40-0 Lunch & Dinner Focus w/ No Snack":
      return dailyBudget * 0;
    default:
      return 0; // Default value when none of the options match
  }
}

export default function Budget({ budget, days }: BudgetProps) {
  const [selectedOption, setSelectedOption] = useState<string>('25-25-25-25 Balance');
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [snack, setSnack] = useState(0);
  const dailyBudget = budget / days;

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);

    // Calculate Meals based on the selected option and daily budget
    const newBreakfast = calculateBreakfast(newSelectedOption, dailyBudget);
    const newLunch = calculateLunch(newSelectedOption, dailyBudget);
    const newDinner = calculateDinner(newSelectedOption, dailyBudget);
    const newSnack = calculateSnack(newSelectedOption, dailyBudget);


    setBreakfast(newBreakfast);
    setLunch(newLunch);
    setDinner(newDinner);
    setSnack(newSnack);
  };

  useEffect(() => {
    // Recalculate Meals when the daily budget changes (e.g., when days or budget props change)
    const newBreakfast = calculateBreakfast(selectedOption, dailyBudget);
    const newLunch = calculateLunch(selectedOption, dailyBudget);
    const newDinner = calculateDinner(selectedOption, dailyBudget);
    const newSnack = calculateSnack(selectedOption, dailyBudget);


    setBreakfast(newBreakfast);
    setLunch(newLunch);
    setDinner(newDinner);
    setSnack(newSnack);
  }, [selectedOption, dailyBudget]);

  return (
    <div className="flex flex-col mt-4">
      <p className="mb-2">Your budget for {days} days is ₱{budget}</p>
      <p className="mb-2">Daily budget is <span className="text-yellow-500">₱{isNaN(dailyBudget) ? '0' : dailyBudget.toFixed(2)}</span></p>

      <label htmlFor="budgetType">Select your budget distribution:</label>
      <select
        className="text-gray-700 mb-2"
        id="budgetType"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="25-25-25-25 Balance">25-25-25-25 Balance</option>
        <option value="30-30-30-10 Balance Less Snack">30-30-30-10 Balance Less Snack</option>
        <option value="15-35-35-15 Lunch & Dinner Focus">15-35-35-15 Lunch & Dinner Focus</option>
        <option value="20-30-40-10 Dinner Focus">20-30-40-10 Dinner Focus</option>
        <option value="20-40-30-10 Lunch Focus">20-40-30-10 Lunch Focus</option>
        <option value="20-40-40-0 Lunch & Dinner Focus w/ No Snack">20-40-40-0 Lunch & Dinner Focus w/ No Snack</option>
      </select>
      <p className="mb-2">Percentage Distribution (Breakfast, Lunch, Dinner, Snack)</p>
      <p className="mb-2">Budget Distribution: {selectedOption}</p>
      
      <p>Breakfast: <span className="text-yellow-500">₱{isNaN(breakfast) ? '0' : breakfast.toFixed(2)}</span></p>
      <p>Lunch: <span className="text-yellow-500">₱{isNaN(lunch) ? '0' : lunch.toFixed(2)}</span></p>
      <p>Dinner: <span className="text-yellow-500">₱{isNaN(dinner) ? '0' : dinner.toFixed(2)}</span></p>
      <p>Snack: <span className="text-yellow-500">₱{isNaN(snack) ? '0' : snack.toFixed(2)}</span></p>
    </div>
  );
}

