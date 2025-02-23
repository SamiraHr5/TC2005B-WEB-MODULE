'use client';
import { useState } from 'react';
import Rectangle from "../components/rectangle";

export default function Grid() {
  const [rectangleColor, setRectangleColor] = useState("lightgrey");

  return (
    <div className="w-60 mt-2">
      <div className="mb-4">
        <Rectangle color={rectangleColor} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => setRectangleColor("green")} className="bg-green-500 flex items-center justify-center text-white px-4 py-2 rounded">
            Verde</button>
        <button onClick={() => setRectangleColor("red")} className="bg-red-500 flex items-center justify-center text-white px-4 py-2 rounded">
          Rojo</button>
        <button onClick={() => setRectangleColor("blue")} className="bg-blue-500 flex items-center justify-center text-white px-4 py-2 rounded">
          Azul</button>
        <button onClick={() => setRectangleColor("yellow")} className="bg-yellow-500 flex items-center justify-center text-white px-4 py-2 rounded">
          Amarillo</button>
      </div>
    </div>
  );
}
