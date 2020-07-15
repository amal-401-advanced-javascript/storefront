import React from 'react';
import './styles.scss';
import Products from './components/storefront/products';
import Categories from './components/storefront/categories';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Cart from './components/storefront/Cart';
function App() {
  return (
    <>
      <CssBaseline >
        <Header />
        <div className="cart">
        <Categories />
        <Cart />
        </div>
        <Products />
        <Footer />
      </CssBaseline>
    </>
  );
}


export default App;
