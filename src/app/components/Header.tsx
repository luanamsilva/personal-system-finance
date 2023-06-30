"use client"
import { ItemTypes } from "../types/ItemTypes"
import { categories } from "../data/Categories"
import { useEffect, useState } from "react";

type Props = {
    list: ItemTypes[]
  }
export const Header = ({list}:Props) => {

  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-gray-300 text-center text-2xl p-5">Sistema Financeiro</h1>    

  </div> )
}