import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Project>
        <Projects />
      </Project>
      <Project>
        <Footer />
      </Project>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Banner = styled.div`
  background: linear-gradient(159deg, rgb(170, 211, 228) 0%, rgb(171, 208, 237) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const Project = styled.div`
  background: linear-gradient(159deg, rgb(170, 211, 228) 0%, rgb(171, 208, 237) 100%);
`;
