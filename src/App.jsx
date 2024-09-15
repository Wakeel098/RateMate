import { useState } from 'react';
import  InputBox  from './components/InputBox.jsx';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : []; // Added fallback in case currencyInfo is undefined

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg)`,
      }}
    >
      <div className=" border-2 rounded-lg bg-white bg-opacity-20 p-2 flex flex-col items-center relative">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            className="m-1"
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}  
          />
        </form>

        <div className="relative w-full flex justify-center">
          <button
            className="absolute bg-blue-500 text-white px-4 py-2 -top-[20px] rounded-md z-10"
            onClick={swap}
          >
            Swap
          </button>
        </div>
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            className="m-1"
            label="To"
            amount={convertedAmount}
            amountDisabled={true}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            onAmountChange={(amount) => setAmount(amount)}

            selectedCurrency={to}  
          />
        </form>

        <button 
         onClick={convert}
        // type='submit' 
        className='bg-blue-500 text-white px-4 py-2 w-96 rounded-lg'>convert {from.toUpperCase()} to {to.toUpperCase()}</button>
       

      </div>
    </div>
  );
}

export default App;
