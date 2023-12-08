import Header from "./components/Banner/Header";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
    </Container>
  );
}

export default App;

const Container = styled.div`
`;

const Banner = styled.div``;
