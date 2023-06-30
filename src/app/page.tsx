"use client"
import { Header } from "@component/app/components/Header"
import { useEffect, useState } from "react"
import {items} from "@component/app/data/items"
import { getCurrentMonth, filteredListByMonth } from "./helpers/dataFilter"
import { ItemTypes } from "./types/ItemTypes"
import {Transactions} from "@component/app/components/Transactions"
import CurrentMonth from "./components/CurrentMonth"
import { Input } from "@component/app/components/Input"


export default function Home() {

  const [list,setList]= useState(items)
  const[filterdList, setFilteredList] = useState<ItemTypes[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(()=>{
  setFilteredList(filteredListByMonth(list, currentMonth)  )   
  },[list, currentMonth])
  
const onMonthChange = (newMonth: string)=>{
  setCurrentMonth(newMonth)
}
const handleAddItem = (item: ItemTypes) => {
  let newList = [...list];
  newList.push(item);
  setList(newList);
  
}

  return (
    <main>
<Header list={filterdList}/>
<Input onAdd={handleAddItem}/>
<CurrentMonth onMonthChange={onMonthChange} currentMonth={currentMonth}/>
<Transactions list={filterdList}/>
    </main>
  )
}
