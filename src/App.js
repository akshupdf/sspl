
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import About from './components/About';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/Contact';
import Product from './components/Product';
import ScrollToTop from './components/ScrolltoTop';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
        <Routes>
        <Route path="/"  element={<Home />} ></Route>
          <Route path='about' element={<About />} ></Route>
          <Route path='contact' element={<Contact />} ></Route>
          <Route path='products' element={<Product />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
