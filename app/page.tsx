"use client"

import { useState } from 'react';
import Image from "next/image";
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
    <main className="flex min-h-screen flex-col items-center justify-center p-5 w-full md:max-w-700">
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
        <Image className="mb-5" src="/logo.png" width={80} height={80} priority alt="App logo" />
        </div>
        <h1 className="text-2xl text-center mb-5">Daily Meals Budget Planner</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 items-center">
      <div className="text-center p-3">
        <span className="text-white block">Budget amount:</span>
        <input
          type="number"
          className="text-gray-700 p-2 w-full md:w-auto mx-auto md:mx-0 rounded-xl text-center"
          value={budgetValue === '' ? '' : budgetValue.toString()}
          onChange={handleBudgetChange}
        />
      </div>
      <div className="text-center p-3">
        <span className="text-white block">Number of Days:</span>
        <input
          type="number"
          className="text-gray-700 p-2 w-full md:w-auto mx-auto md:mx-0 rounded-xl text-center"
          value={daysValue === '' ? '' : daysValue.toString()}
          onChange={handleDaysChange}
        />
      </div>
</div>

       
        
      {typeof budgetValue === 'number' && typeof daysValue === 'number' && (
        <Budget budget={budgetValue} days={daysValue} />
      )}
      </div>
        <button className="border border-yellow-500 rounded-full text-yellow-500 py-3 px-5 hover:bg-slate-100 hover:text-black m-10">Find recipes for this budget</button>
    </main>
  );
}
