import {Box} from '@chakra-ui/react';

import { Main } from './../Main.js';
import { MainWrapper } from './../MainWrapper.js';
import {Footer} from './../styles/Footer.styled';
import Navbar from "./../Navbar/Navbar";



export const WholeContainer = (props) => {
  

  return (
      <Box 
      w="100vw"
      maxWidth="100%"
      margin="0 auto"
      backgroundColor="rgb(219, 215, 202)">
      
      <Navbar itemList={props.itemList}/>
        <MainWrapper>
          <Main itemList={props.itemList}>            
          </Main>
        </MainWrapper>
      <Footer />

      </Box>
          

  )

}
