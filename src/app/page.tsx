'use client';
import { useState } from 'react';
import Menu from "./components/menu"; 


export default function Counter() {

const [counter, setCounter] = useState(0)
const [error, setError] = useState("");

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter+1);
    setError("");
}

const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (counter > 0){
    setCounter(counter-1)
    setError("");
    }else {
        setError("No puede ser menor a cero");
    }
}


  return (
    
  <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center bg-white">
    <Menu></Menu>
    <h1 className="text-7xl font-bold text-gray-800">{counter}</h1> 
    {error && <p className="text-red-500 mt-2">{error}</p>}
    <form onSubmit={handleSubmit}>
        <button 
            type="submit"             
            className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
        >
            Incrementar numero
        </button>
      </form>
    <form onSubmit={handleSubmit2}>
        <button 
            type="submit"             
            className="mt-5 w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
        > 
            Decrementar numero
        </button>
    </form>
  </main> 
  ); 
} 
