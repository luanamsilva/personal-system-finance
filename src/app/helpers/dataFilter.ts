export const getCurrentMonth = () =>{
  let nowDate = new Date()
  return `${nowDate.getFullYear()} - ${nowDate.getMonth()+1}`
}