import Categories from './Components/Categories';
import ItemsList from './Components/ItemsList';
import './App.css';
function App() {
  return (
    <div className='bg-gray-400 max-h-full bg-cover'>
      <div>
        <Categories />
        <ItemsList />
      </div>
    </div>
  );
}

export default App;
