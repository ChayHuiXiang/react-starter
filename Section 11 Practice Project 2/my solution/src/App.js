import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import React, {useState} from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
  const cartButtonHandler = () => {
    setShowCart(true);
  }
  const closeCartHandler = () => {
    setShowCart(false);
  }
  return (
    <CartProvider>
      <Header onClick={cartButtonHandler}/>
      <main>
        <Meals />
        {showCart && <Cart onClose={closeCartHandler}/>}
      </main>
    </CartProvider>
  );
}

export default App;
