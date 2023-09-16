"use client"

import React, { useState } from 'react';
import Budget from "@/components/budget";

export default function Home() {
  const [budgetValue, setBudgetValue] = useState<number | ''>(0);
  const [daysValue, setDaysValue] = useState<number | ''>(0);

  // Function to update the budget value
  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      setBudgetValue(newValue);
    } else {
      setBudgetValue(0);
    }
  };

  // Function to update the days value
  const handleDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      setDaysValue(newValue);
    } else {
      setDaysValue(0);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 sm:p-24 md:max-w-700">
      <div className="flex flex-col">
        <h1 className="text-2xl text-center mb-5">Daily Meals Budget Planner</h1>
        <div className="flex flex-col gap-2">
          <div className="mb-"> <span className="text-white">Budget amount: </span>
        <input
          type="number"
          className="text-gray-700 px-2"
          value={budgetValue === '' ? '' : budgetValue.toString()}
          onChange={handleBudgetChange}
        /></div>
          <div><span className="text-white">Number of Days: </span>
        <input
          type="number"
          className="text-gray-700 px-2"
          value={daysValue === '' ? '' : daysValue.toString()}
          onChange={handleDaysChange}
        /></div>
        </div>
       
        
      {typeof budgetValue === 'number' && typeof daysValue === 'number' && (
        <Budget budget={budgetValue} days={daysValue} />
      )}
      </div>
        <button className="border border-yellow-500 rounded text-yellow-500 py-3 px-5 hover:bg-slate-100 hover:text-black m-10">Find recipes for this budget</button>
    </main>
  );
}
