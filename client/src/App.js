import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {WholeContainer} from './components/styles/Container.js';
import React, {useState, useEffect, } from 'react';
const apiHost = process.env.REACT_APP_API_HOST

function App() {
  const [items, setItems] = useState([]);

  /*
  useEffect(() => {
    fetch(`https://mock-storefront.herokuapp.com/products`)
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, []);
  */
  useEffect(() => {
    fetch(`${apiHost}/products`)
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, []);

  if (items.length === 0) {
    return (
      <>Still loading...</>
    );
  }

  return (
    <ChakraProvider>
      <WholeContainer itemList={items} />
    </ChakraProvider>
  );
}


export default App;
