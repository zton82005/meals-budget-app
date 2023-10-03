"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";

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

  const numericValues = selectedOption.split('-').map(Number).filter((value) => !isNaN(value));
    const percentageDistribution = numericValues.map((value, index) => (isNaN(value) ? 0 : value));

    // Add a fallback value of 0 for any non-numeric portion
    const totalPercentage = percentageDistribution.reduce((acc, val) => acc + val, 0);
    
    if (totalPercentage <= 100) {
      const remainingPercentage = 100 - totalPercentage;
      percentageDistribution[3] = remainingPercentage;
    }

  

  return (
    <div className="flex flex-col mt-4 w-full">
      <p className="mb-2 text-center">Your budget for {days} days is ₱{budget}</p>
      <div className="border rounded-full border-white text-center mb-4 w-full m-auto p-5 hover:bg-gray-900">
        <p className="mb-2 text-center">Daily budget: </p>
        <span className="text-yellow-500 text-4xl font-bold text-center mb-4">₱{days===0 ? '0' : dailyBudget.toFixed(2)}</span>
      </div>

      <label htmlFor="budgetType" className="text-center mb-2">Set your daily budget distribution:</label>
      <select
  className="text-gray-700 mb-2 w-full md:max-w-md lg:max-w-lg xl:max-w-xl p-2 rounded-xl text-center"
  id="budgetType"
  value={selectedOption}
  onChange={handleOptionChange}
>
  <option value="25-25-25-25 Balance">25-25-25-25 Balance</option>
  <option value="30-30-30-10 Balance Less Snack">30-30-30-10- Balance Less Snack</option>
  <option value="15-35-35-15 Lunch & Dinner Focus">15-35-35-15- Lunch & Dinner Focus</option>
  <option value="20-30-40-10 Dinner Focus">20-30-40-10- Dinner Focus</option>
  <option value="20-40-30-10 Lunch Focus">20-40-30-10- Lunch Focus</option>
  <option value="20-40-40-0 Lunch & Dinner Focus w/ No Snack">20-40-40-0- Lunch & Dinner Focus, No Snack</option>
</select>

      <p className="text-center mb-2 my-4">Percentage Distribution:</p>
      <div className="mb-4 text-center flex gap-0">
        <div className="border py-3 bg-blue-500 hover:bg-blue-500 hover:bg-opacity-50 transition duration-300 ease-in-out" style={{ flex: `${percentageDistribution[0]} 0 0` }}>
          
        </div>
        <div className="border py-1 bg-green-500 hover:bg-green-500 hover:bg-opacity-50 transition duration-300 ease-in-out" style={{ flex: `${percentageDistribution[1]} 0 0` }}>
          
        </div>
        <div className="border py-1 bg-red-500 hover:bg-red-500 hover:bg-opacity-50 transition duration-300 ease-in-out" style={{ flex: `${percentageDistribution[2]} 0 0` }}>
          
        </div>
        <div className="border py-1 bg-purple-500 hover:bg-purple-500 hover:bg-opacity-50 transition duration-300 ease-in-out" style={{ flex: `${percentageDistribution[3]} 0 0` }}>
          
        </div>
      </div>
    
      <div className="flex justify-evenly gap-3 my-3">
        <div className="flex flex-col text-blue-100 text-center w-full p-5 bg-blue-500 rounded-lg hover:bg-blue-600 items-center justify-center">
        <Image className="mb-5" src="/bf.png" width={50} height={50} priority alt="Breakfast" />
        <p className="text-center">Breakfast:</p> <span className="font-bold text-xl text-center">₱{days===0 ? '0' : breakfast.toFixed(2)}</span>
        </div>
        <div className="flex flex-col text-green-100 text-center w-full p-5 bg-green-500 rounded-lg hover:bg-green-600 items-center justify-center">
        <Image className="mb-5" src="/lunch.png" width={50} height={50} priority alt="Lunch" />
        <p className="text-center">Lunch: </p><span className="font-bold text-xl text-center">₱{days===0 ? '0' : lunch.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-evenly gap-3 mb-3">
        <div className="flex flex-col text-red-100 text-center w-full p-5 bg-red-500 rounded-lg hover:bg-red-600 items-center justify-center">
        <Image className="mb-5" src="/dinner.png" width={50} height={50} priority alt="Dinner" />
        <p className="text-center">Dinner: </p><span className="font-bold text-xl text-center">₱{days===0 ? '0' : dinner.toFixed(2)}</span>
        </div>

        <div className="flex flex-col text-purple-100 text-center w-full p-5 bg-purple-500 rounded-lg hover:bg-purple-600 items-center justify-center">
        <Image className="mb-5" src="/snacks.png" width={50} height={50} priority alt="Snacks" />
        <p className="text-center">Snack: </p><span className="font-bold text-xl text-center">₱{days===0 ? '0' : snack.toFixed(2)}</span>
        </div>
      </div>

    

      <p className="mb-2 text-center">Budget Distribution: <span className="font-bold">{selectedOption}</span></p>
    </div>
  );
  
}

