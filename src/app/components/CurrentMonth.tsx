import React from 'react'
import { formatCurrentMonth } from '../helpers/dataFilter'
import {CaretCircleLeft, CaretCircleRight} from 'phosphor-react'

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string)=> void
}

const CurrentMonth = ({currentMonth,onMonthChange}: Props) => {

  const handlePrevMonth = ()=>{
let [year, month] = currentMonth.split('-')
let currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
currentDate.setMonth(currentDate.getMonth() - 1)
onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = ()=>{
    let [ year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) +1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
  }

  return (<>
  <div className='flex w-full justify-center items-center pb-6 gap-4'>
  <CaretCircleLeft onClick={handlePrevMonth} size={28} weight="duotone" className="text-white"/>
    <div className='text-gray-200'>{formatCurrentMonth(currentMonth)}</div>

    <CaretCircleRight onClick={handleNextMonth} size={28} weight="duotone" className="text-white" />
</div> </> )
}

export default CurrentMonth