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

  export const dateFormated =(date: Date):string =>{
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDate()
return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
  } 

const addZeroToDate = (n:number):string=> n < 10 ? `0${n}` : `${n}`

  export const formatCurrentMonth = (currentMonth: string):string=>{
    let [year, month] = currentMonth.split('-');
    let months = ["Janeiro", "Fevereiro" ,"Março", "Abril" ,"Maio" , "Junho" ,"Julho","Agosto", "Setembro", "Outubro", "Novembro","Dezembro"]
    return `${months[parseInt(month)-1]} - ${year}`
  }