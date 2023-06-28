import { categories } from "../data/Categories"
import { dateFormated } from "../helpers/dataFilter"
import { ItemTypes } from "../types/ItemTypes"

type Props = {
  list: ItemTypes[]
}
export const Transactions = ({list}:Props)=>{
  return(
    <div className="overflow-x-auto">
    <table className="text-white w-full bg-zinc-950">
      <thead>
        <tr className="text-white w-full bg-zinc-950">
          <th className="px-2 whitespace-nowrap">Data</th>
          <th className="px-2 whitespace-nowrap">Descrição</th>
         <th className="px-2 whitespace-nowrap">Categoria</th> 
         <th className="px-2 whitespace-nowrap"> valor</th>
        </tr>
      </thead>

      <tbody>
        {list.map((listItem)=>(
          <tr key={listItem.id}>
            <td className="px-2 py-1 text-center">{dateFormated(listItem.date)}</td>
                <td className="px-2 py-1 text-center">
          {listItem.title}
            </td>
            <td className="px-2 py-1 text-center">{categories[listItem.category].title}</td>
            {categories[listItem.category].expense ? 
            <td className="text-red-600 px-2 py-1 text-center">R$ {listItem.value.toFixed(2)}</td> :
            <td className="text-green-600 px-2 py-1 text-center">R$ {listItem.value.toFixed(2)}</td>} 
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}