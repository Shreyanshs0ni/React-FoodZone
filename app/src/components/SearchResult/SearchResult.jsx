import styled from "styled-components";
import { BASE_URL, Container } from "../../App";
import { useEffect, useState } from "react";

const SearchResult = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedButton, setSelectedButton] = useState("all");

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Burger",
      type: "burger",
    },
    {
      name: "Drinks",
      type: "drinks",
    },
    {
      name: "Siders",
      type: "siders",
    },
  ];

  const filteredFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedButton(type);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <Container>
      {" "}
      <FoodCardsContainer>
        <FilterContainer>
          {filterBtns.map((values) => (
            <Button
              isSelected={selectedButton === values.type}
              key={values.name}
              onClick={() => filteredFood(values.type)}
            >
              {values.name}
            </Button>
          ))}
        </FilterContainer>

        <FoodCards>
          {filteredData?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </FoodCardsContainer>
    </Container>
  );
};

export default SearchResult;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`;

const Button = styled("button").withConfig({
  shouldForwardProp: (prop) => ![`isSelected`].includes(prop),
})`
  background: ${({ isSelected }) => (isSelected ? "#FDC702" : "#e50001")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: ${({ isSelected }) => (!isSelected ? "#FDC702" : "#e50001")};
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px;
    background-color: ${({ isSelected }) =>
      isSelected ? "#FDC702" : "#e50001"};
  }
`;

const FoodCardsContainer = styled.section`
  min-height: calc(100vh - 110px);
  background-image: url("/background.png");
  background-size: cover;
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid #e50001;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    gap: 10px;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 10px;
    }
    button {
      font-size: 12px;
    }
  }
  .food_image img {
    height: 130px;
    width: 130px;
    border-radius: 100px;
  }
`;
