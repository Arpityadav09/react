function InputBox({label,amount,onAmountChange,currencyOptions={},selectCurrency,onCurrencyChange}){
    return (
        <>
        <div className="mb-8">
      <label className="block mb-2 text-sm opacity-80">{label}</label>
      <div className="flex gap-3">
        <input 
          type="number" 
          placeholder="0.00"
          value={amount}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-2/3 px-4 py-3 rounded-xl bg-white/20 placeholder-white/60"
        />
        <select className="w-1/3 px-3 py-3 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 transition" 
        value={selectCurrency}
onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

    {currencyOptions.map((currency) => (
        <option key={currency} value={currency}>
        {currency}
        </option>
    ))}
        </select>
      </div>
    </div>
        </>
    )
}
export default InputBox