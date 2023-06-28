import { categories } from "../data/Categories"
import { dateFormated } from "../helpers/dataFilter"
import { ItemTypes } from "../types/ItemTypes"

type Props = {
  list: ItemTypes[]
}
export const Transactions = ({list}:Props)=>{
  return(
    <div className="overflow-x-auto">
    <table className="text-white w-full">
      <thead>
        <tr className="text-white w-full">
          <th className="px-2 whitespace-nowrap">Data</th>
          <th className="px-2 whitespace-nowrap">Descrição</th>
         <th className="px-2 whitespace-nowrap">Categoria</th> 
         <th className="px-2 whitespace-nowrap"> valor</th>
        </tr>
      </thead>

      <tbody>
        {list.map((listItem)=>(
          <tr key={listItem.id}>
            <td>{dateFormated(listItem.date)}</td>
                <td>
          {listItem.title}
            </td>
            <td>{categories[listItem.category].title}</td>
            {categories[listItem.category].expense ? 
            <td className="text-red-600">R$ {listItem.value}</td> :
            <td className="text-green-600">R$ {listItem.value}</td>} 
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}