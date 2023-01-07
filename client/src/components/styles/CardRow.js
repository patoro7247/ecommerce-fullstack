import React from 'react';

import ProductCard from './Card.js'


import {
  Flex,
  Center
} from '@chakra-ui/react';


//send props to each product card

const CardRow = (props) => {
  //props should be an object with a list of Product objects(id, name, price, etc.)
  //Dereference prop for each product to assign to a ProductCard that will take its info
  //When passing props to child object, you can reference the props in the child object
  //with props.propNameYouPassedFromParent 

  const specificItemList = props.itemList.productItems;

  //data is list of products, pass a product as a prop to each ProductCard


  return (
      <Center alignItems="center" justifyContent="center">
          <Flex  w="sm" alignItems="center" justifyContent="center" position="auto">
              {specificItemList.map(function(productItem, i) {
                return <ProductCard item={productItem} key={i} />
              })}

          </Flex>
      </Center>
  );
}

export default CardRow;