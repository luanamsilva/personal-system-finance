"use client"
import { Header } from "@component/app/components/Header"
import { useEffect, useState } from "react"
import {itemsData} from "@component/app/data/itemsData"
import { getCurrentMonth, filteredListByMonth } from "./helpers/dataFilter"
import { ItemTypes } from "./types/ItemTypes"
import {Transactions} from "@component/app/components/Transactions"

export default function Home() {

  const [list,setList]= useState(itemsData)
  const[filterdList, setFilteredList] = useState<ItemTypes[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)

  useEffect(()=>{
  setFilteredList(filteredListByMonth(list, currentMonth)  )   
  },[list, currentMonth])

  return (
    <main>
<Header list={filterdList}/>
<Transactions list={filterdList}/>
    </main>
  )
}
