import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 40px;
  height: 50vh;
  position: relative;
  display:flex;
  flex-flow: row wrap;
  display: grid;
  width: 540px;
  grid-template-columns: 120px 120px 120px;
  align-items: start;
  justify-content: space-between;
  align-self: center;
  
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  margin: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
  
`;

const Info = styled.div`
  opacity: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:absolute;
  
`;

const Title = styled.h1`
    font-size:20px;
    color:black;
    margin-bottom: 5px;
    margin-top:1px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: lightgray;
    color:black;
    cursor: pointer;
    font-weight: 600;
    border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Info>
         <Image src={item.img} />
        <Button><Link to={`/product/${item._id}`}>SHOP NOW </Link></Button>
      </Info>
    </Container>
  );
};

export default Product;