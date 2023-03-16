import styled from "styled-components";
import { popularProducts } from "../data";
import AllCategoriItem from "./AllCategoriItem";



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const AllCategories = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <AllCategoriItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default AllCategories;