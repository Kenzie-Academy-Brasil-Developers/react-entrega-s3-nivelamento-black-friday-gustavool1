import './App.css';
import { useState } from 'react'
import ButtonRandom from './components/ButtonRandom/ButtonRandom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
function App() {
  const [ useProduct ] = useState([
    { id: 1, name: 'Smart TV LED 50', price: 1999.00 },
    { id: 2, name: 'PlayStation 5', price: 12000.00 },
    { id: 3, name: 'Notebook Acer Nitro 5', price: 5109.72 },
    { id: 4, name: 'Headset s fio Logitech G935', price: 1359.00 },
    { id: 5, name: 'Tablet Samsung Galaxy Tab S7', price: 4844.05 },
    { id: 6, name: 'Cadeira Gamer Cruiser Preta FORTREK', price: 1215.16 },
    ]);
  const [ cart, setCart ] = useState([])
  const [productsDiscounted, setProductsDiscounted ] = useState([])
  return (
    <div className="App">
      <header className="App-header">
          <ButtonRandom useProduct={ useProduct }  setProductsDiscounted={ setProductsDiscounted } productsDiscounted={ productsDiscounted }/>
          <ProductList productsDiscounted={ productsDiscounted } cart={ cart } setCart={ setCart }/>
          <Cart cart={cart}/>
      </header>
      
    </div>
  );
}

export default App;
