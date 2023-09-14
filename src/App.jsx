import { useEffect, useState } from 'react'
import Header from './components/Header';
import './App.css'
import Footer from './components/Footer';
import ProductScroll from './components/ProductScroll';
import Form from './components/Form';
import Banner from './components/Banner';

function App() {
  const [products, setProduct] = useState([]);
  

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
  return (
    <>
      <Header />
      <Banner />
      <ProductScroll products={products}/>
      <Form />
      <Footer />
    </>
  )
}

export default App
