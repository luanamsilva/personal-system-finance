
import { categories } from "../data/Categories"
import { dateFormated } from "../helpers/dataFilter"
import { ItemTypes } from "../types/ItemTypes"

type Props = {
  list: ItemTypes[]
}
export const Transactions = ({list}:Props)=>{
  return(
    <div className="overflow-x-auto">
    <table className="text-white w-full border-separate" style={{ borderSpacing: '0px 10px' }}>
      <thead>
        <tr className="text-gray-200 w-full bg-neutral-900 border-gray-600">
          <th className="px-2 py-1.5 whitespace-nowrap">Data</th>
          <th className="px-2 py-1.5 whitespace-nowrap">Descrição</th>
         <th className="px-2 py-1.5 whitespace-nowrap">Categoria</th> 
         <th className="px-2 py-1.5 whitespace-nowrap"> valor</th>
        </tr>
      </thead>

      <tbody className=" bg-zinc-900 text-gray-100">
        {list.map((item)=>(
          <tr key={item.id}>
            <td className="px-2 py-1.5 text-center border border-zinc-900">{dateFormated(item.date)}</td>
                <td className="px-1 py-1 text-center border border-zinc-900">
          {item.title}
            </td>
            <td className="px-2 py-1.5 text-center border border-zinc-900">{categories[item.category].title}</td>
            {categories[item.category].expense ? 
            <td className="text-red-600 px-2 py-1.5 text-center border border-zinc-900">R$ {item.value.toFixed(2)}</td> :
            <td className="text-green-600 px-2 py-1.5 text-center border border-zinc-900">R$ {item.value.toFixed(2)}</td>} 
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}