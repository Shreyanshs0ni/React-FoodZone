import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [state, setState] = useState(true);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };
    fetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;
  return (
    <>
      {" "}
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
      </Container>
      <SearchResult data={data} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #e50001;
  .logo img {
    height: 72px;
    width: 128px;
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
