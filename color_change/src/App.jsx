import { useState } from "react"
function App() {
  const [color,setColor] =useState("bg-black");
  return (
    <div className={`min-h-screen ${color}`}>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 
                bg-gray-900/90 backdrop-blur-md 
                px-6 py-4 rounded-4xl shadow-2xl
                flex gap-4 items-center">
  
  <button className="w-10 h-10 rounded-full bg-red-500 
                     hover:scale-110 transition-transform duration-200 
                     ring-2 ring-white" onClick={()=>{setColor("bg-red-500")}}></button>

  <button className="w-10 h-10 rounded-full bg-green-500 
                     hover:scale-110 transition-transform duration-200 
                     ring-2 ring-white" onClick={()=>{setColor("bg-green-500")}}></button>

  <button className="w-10 h-10 rounded-full bg-yellow-400 
                     hover:scale-110 transition-transform duration-200 
                     ring-2 ring-white" onClick={()=>{setColor("bg-yellow-400")}}></button>

  <button className="w-10 h-10 rounded-full bg-blue-500 
                     hover:scale-110 transition-transform duration-200 
                     ring-2 ring-white" onClick={()=>{setColor("bg-blue-500")}}></button>

  <button className="w-10 h-10 rounded-full bg-black 
                     hover:scale-110 transition-transform duration-200 
                     ring-2 ring-white" onClick={()=>{setColor("bg-black")}}></button>
  <button className="w-10 h-10 rounded-full bg-white 
                     hover:scale-110 transition-transform duration-200 
                     ring-2 ring-white" onClick={()=>{setColor("bg-white")}}></button>
</div>
    </div>
    

  )
}
export default App
