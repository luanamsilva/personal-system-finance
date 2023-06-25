import { Header } from "@component/app/components/Header"
import { useState } from "react"
import {itemsData} from "@component/app/data/itemsData"
import { getCurrentMonth } from "./helpers/dataFilter"

export default function Home() {

  const [list,setList]= useState(itemsData)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)
  return (
    <main>
<Header/>
    </main>
  )
}
