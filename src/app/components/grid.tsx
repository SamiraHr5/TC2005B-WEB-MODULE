import Rectangle from "./Rectangle";

export default function Grid() {
  const color1 = "brown";   
  const color2 = "white";  

  return (
    <div className="grid grid-cols-3 gap-2">
      {[...Array(9)].map((_, index) => (
        <Rectangle 
          key={index} 
          color={index % 2 === 0 ? color1 : color2} 
        />
      ))}
    </div>
  );
}
