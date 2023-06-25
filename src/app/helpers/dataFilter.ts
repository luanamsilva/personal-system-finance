import { ItemTypes } from "../types/ItemTypes"

export const getCurrentMonth = () =>{
  let nowDate = new Date()
  return `${nowDate.getFullYear()} - ${nowDate.getMonth()+1}`
}

export const filteredListByMonth = (list:ItemTypes[], date: string):ItemTypes[] =>{
  let newList: ItemTypes[] = []
  let [year, month] = date.split('-')
  for(let i in list ){
    if((list[i].date.getFullYear() === parseInt(year)) &&
     (list[i].date.getMonth()+1) === parseInt(month)){
      newList.push(list[i])
    }
  }

  return newList
  }