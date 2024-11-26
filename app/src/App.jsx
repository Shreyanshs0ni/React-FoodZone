import { useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000";

const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/Logo.png" alt=""></img>
        </div>
        <div className="search">
          {" "}
          <input placeholder="Search Items"></input>
        </div>
      </TopContainer>

      <FoodCardsContainer>
        <FilterContainer>
          <Button>All</Button>
          <Button>Burgers</Button>
          <Button>Drinks</Button>
          <Button>Sides</Button>
        </FilterContainer>
        <FoodCard></FoodCard>
      </FoodCardsContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #e50001;
  .logo img {
    height: 90px;
    width: 160px;
  }
  .search input {
    background-color: #fdc702;
    border: 1px solid #e50001;
    border-radius: 5px;
    color: #222222;
    height: 40px;
    padding: 0 10px;
    font-size: 16px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`;

const Button = styled.button`
  background: #e50001;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: #fdc702;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px;
  }
`;

const FoodCardsContainer = styled.section`
  height: calc(100vh - 130px);
  background-image: url("/background.png");
  background-size: cover;
`;
const FoodCard = styled.div``;
