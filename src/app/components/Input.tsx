'use client';

import { useState } from 'react';
import { ItemTypes } from '../types/ItemTypes';
import { categories } from '../data/Categories';


type Props = {
  onAdd: (item: ItemTypes) => void;
};

export const Input = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);
  
  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if(titleField === '') {
      errors.push('Título vazio!');
    }
    if(valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        id: categoryKeys.length+1,
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return (
    <div>
      <form className="flex flex-wrap items-center justify-center gap-3 text-center text-gray-300 pb-8">
        <div className="w-full sm:w-auto">
          <input
            className="w-full sm:w-auto rounded-md p-1 bg-zinc-900 border-2 border-zinc-900"
            type="date"
            value={dateField}
            onChange={e => setDateField(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-auto">
          <input
            className="w-full sm:w-auto rounded-md p-1 bg-zinc-900 border-2 border-zinc-900 "
            type="text"
            value={titleField} 
            onChange={e => setTitleField(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto">
          <select className="w-full sm:w-auto rounded-md p-1.5 bg-zinc-900 border-2 border-zinc-900" value={categoryField} onChange={e => setCategoryField(e.target.value)}>
          <option></option>
          {categoryKeys.map((id) => (
                <option key={id} value={id}>{categories[id].title}</option>
              ))}
          </select>
        </div>
        <div className="w-full sm:w-auto">
          <input
            className="w-full sm:w-auto rounded-md p-1 bg-zinc-900 border-2 border-zinc-900 "
            type="number"
            value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}
          />
        </div>
        <button
          onClick={handleAddEvent}
          className="bg-slate-950 text-gray-200 p-2 rounded-md"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};
