import Categories from './Components/Categories';
import SideLayout from './Components/SideLayout';
import './App.css';
import { useState } from 'react';
function App() {
  const [TotalPrice, SetTotalPrice] = useState(0);
  return (
    <div className='bg-gray-400 h-screen overflow-y-auto bg-cover'>
      <div className='flex'>
        <Categories setTotalPrice={SetTotalPrice} />
        <SideLayout total_price={TotalPrice.toFixed(2)} />
      </div>
    </div>
  );
}

export default App;
