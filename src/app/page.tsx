"use client"
import { Header } from "@component/app/components/Header"
import { useEffect, useState } from "react"
import {itemsData} from "@component/app/data/itemsData"
import { getCurrentMonth, filteredListByMonth } from "./helpers/dataFilter"
import { ItemTypes } from "./types/ItemTypes"
import {Transactions} from "@component/app/components/Transactions"
import CurrentMonth from "./components/CurrentMonth"

export default function Home() {

  const [list,setList]= useState(itemsData)
  const[filterdList, setFilteredList] = useState<ItemTypes[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)

  useEffect(()=>{
  setFilteredList(filteredListByMonth(list, currentMonth)  )   
  },[list, currentMonth])
const onMonthChange = (newMonth: string)=>{
  setCurrentMonth(newMonth)
}

  return (
    <main>
<Header list={filterdList}/>
<CurrentMonth onMonthChange={onMonthChange} currentMonth={currentMonth}/>
<Transactions list={filterdList}/>
    </main>
  )
}
