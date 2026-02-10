import { useEffect, useState } from 'react'


function App() {
  const [addnumber,setNumber]=useState(false)
  const [addchar,setChar]=useState(false)
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("YourPassword123");
  function passwordgenerate(len){
    let temp="abcdefghijklmnopqrstuvwxyz";
    if(addnumber) temp+="123456789"
    if(addchar) temp+="!@#$%^&*(){}_"
    let result="";
    for(let i=0;i<len;i++){
      result+= temp.charAt(Math.floor(Math.random() * temp.length));
    }
    setPassword(result)
  }
  useEffect(()=>{passwordgenerate(length)},[addchar,addnumber,length])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="space-y-6 bg-gray-800 p-6 rounded-xl w-96">

        <h1 className="text-2xl font-bold text-center">
          Password Generator
        </h1>

        <div className="bg-gray-900 p-3 rounded text-center font-mono text-lg break-all">
          {password}
        </div>

        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-4 h-4 accent-blue-500"
              checked={addnumber}
              onChange={()=>setNumber(!addnumber)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-4 h-4 accent-blue-500"
              checked={addchar}
              onChange={()=>setChar(!addchar)}
            />
            Include Symbols
          </label>
        </div>

        <div>
          <label className="block mb-2">
            Length: <span className="font-semibold">{length}</span>
          </label>

          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

      </div>
    </div>
  )
}

export default App
