import styled from "styled-components";
import React from 'react';

const Container = styled.div`
  height: 50px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 500;
  font-weight: bold;
`;



const PopularTitle = () => {
    return <Container>POPULAR PRODUCTS.</Container>;
}

export default PopularTitle