import { useState } from 'react'
import InputBox from './components/InputBox'
import currencyInfo from './hooks/currencyInfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyinfo=currencyInfo(from)
  const options =currencyinfo ? Object.keys(currencyinfo) :[];
  function swap(){
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  return (
    <>
     <div className='min-h-screen bg-black from-indigo-500 to-purple-600 flex items-center justify-center'>
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl 
              rounded-3xl p-10 text-white">

    <h1 className="text-3xl font-semibold text-center mb-8 tracking-wide">
      Currency Converter
    </h1>

    <InputBox label="From"
    amount={amount}
    onAmountChange={(amount)=> setAmount(amount)}
    currencyOptions={options}
    selectCurrency={from}
    onCurrencyChange={(from)=>setFrom(from)}
    >
    </InputBox>
    

    <div className="flex justify-center my-6">
      <button className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full shadow-lg" onClick={swap}>
        🔁
      </button>
    </div>
    <InputBox
    label="To"
     amount={convertedAmount}
     currencyOptions={options}
     selectCurrency={to}
     onCurrencyChange={(to)=>setTo(to)}>
    </InputBox>
    

    <button 
      className="w-full py-3 rounded-xl bg-pink-500 hover:bg-pink-600 
             font-semibold shadow-lg transition duration-300" onClick={() => {
              if(currencyinfo && currencyinfo[to]) {
                setConvertedAmount(amount * currencyinfo[to])
              }
            }}>
      Convert Currency
    </button>

  </div>
      </div>
    </>
  )
}

export default App
