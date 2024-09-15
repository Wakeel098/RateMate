import React  from 'react'
import { useId } from 'react'

function InputBox({
   label,
   amount,
   onAmountChange,
   onCurrencyChange,
   currencyOptions=[],
   selectedCurrency="usd",
   amountDisabled=false,
   currencyDisabled=false,
   className=""

    
   

}) {
    const id=useId()
    //console.log(label)
  return (
    <div  className={`bg-white p-4 rounded-lg w-96 h-28  text-gray-400 text-sm flex flex-row  ${className}`} >
      
      <div className="w-1/2 mt-2">
      <label htmlFor={id} className="text-black/40 block mb-3 ">{label}</label>

      <input id={id} type="number" className="outline-none w-full bg-transparent  text-black/80"
      placeholder="0"
      disabled={amountDisabled}
      value={amount}
      onChange={(e)=>{
        if(onAmountChange){ 

            onAmountChange(Number(e.target.value))

        }

      }}
       />

  
      
      </div>
      <div className="w-1/2 mt-2  flex  flex-col  items-end  ">
          
        <p className='text-black/40 mb-3 text-right '>Currency Type</p>
        
        <select 
        name="" 
        id="" 
        className="bg-gray-400/50 w-[45%]  text-black/70 px-1 py-1 border-none outline-none"
         value={selectedCurrency}
          
         onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
         disabled={currencyDisabled}
         >
            
            {
                currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                        {currency}
                    </option>


                ))
                } 


         </select>

      </div>

           


    </div>
  )
}

export default InputBox