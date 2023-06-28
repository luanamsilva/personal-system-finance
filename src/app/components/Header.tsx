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


    setExpenseTotal(expenseSum);
    setIncomeTotal(incomeSum);
  }, [list]);
  return (
    <div className="flex flex-col justify-center bg-black w-full">
    <div className="text-white text-center text-2xl p-5">Sistema Financeiro</div>
    <div className="flex text-white gap-28 pb-8 my-8 justify-center">
    <div>Receitas 
    <p>R$ {incomeTotal.toFixed(2)}</p>
    </div>
    <div>Despesas
    <p> R$ {expenseTotal.toFixed(2)}</p>
    </div>
    <div>Saldo</div>
    </div>
 </div> )
}