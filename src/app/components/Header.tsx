"use client"
import { ItemTypes } from "../types/ItemTypes"
import { categories } from "../data/Categories"
import { useEffect, useState } from "react";

type Props = {
    list: ItemTypes[]
  }
export const Header = ({list}:Props) => {
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    let expenseSum = 0;
    let incomeSum = 0;

    list.forEach(item=>{
      const categoryType = categories[item.category]
      if(categoryType.expense){
        expenseSum += item.value
      } else {
        incomeSum += item.value;
      }   })
      const calculatedBalance = incomeSum - expenseSum;

    setExpenseTotal(expenseSum);
    setIncomeTotal(incomeSum);
    setBalance(calculatedBalance)
  }, [list]);
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-gray-300 text-center text-2xl p-5">Sistema Financeiro</h1>    
    <div className="flex flex-col w-4/5 sm:flex-row text-white gap-4 sm:gap-28 pb-8 my-8 justify-between mx-auto">
  
      <div className="bg-green-900 p-3 rounded-md sm:w-1/3 text-center">
        Receitas 
        <p className="sm:text-lg">R$ {incomeTotal.toFixed(2)}</p>
      </div>
      <div className="bg-red-900 p-3 rounded-md sm:w-1/2 md:w-1/3 text-center">
        Despesas
        <p className="sm:text-lg md:text-xl"> R$ {expenseTotal.toFixed(2)}</p>
      </div>
      <div className="bg-gray-900 p-3 rounded-md sm:w-1/2 md:w-1/3 text-center">
        Saldo
        <p className={`text-lg ${balance < 0 ? 'text-red-700' : 'text-green-700'}`}>
    R$ {balance.toFixed(2)}
  </p>
       
      </div>
    </div>
  </div> )
}