// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import Cart from './components/Cart';
// import { ShopContextProvider } from './context/shop-context';
// import  SingleProduct from './components/SingleProduct'

// function App() {
//   return (
//     <ShopContextProvider>
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path="/product/:id" component={<SingleProduct />} />
//         <Route path='/cart' element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//     </ShopContextProvider>

//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { ShopContextProvider } from './context/shop-context';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Use element prop instead of component */}
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
