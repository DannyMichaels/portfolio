import { useContext } from "react";
import Stack from "../Components/Stack/Stack";
import Projects from "../Components/Projects/Projects";
import Layout from "../Components/shared/Layout/Layout";
import Header from "../Components/Header/Header";
import StyledScrollTop from "../Components/BackToTop/StyledScrollTop";
import About from "../Components/Home/About";
import ScrollToTopOnMount from "../Components/BackToTop/ScrollToTopOnMount";
import styled from "styled-components";
import Contact from "../Form/Contact";
import Testimonials from "../Components/Testimonials/Testimonials";
import { Clouds1, Clouds2 } from "../Components/Clouds/Clouds";
import { CloudStateContext } from "../context/animationContext";

let Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 100px;
  flex-flow: row wrap;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function Home() {
  const [cloudMode] = useContext(CloudStateContext);

  const space = (
    <>
      <br /> <br />
    </>
  );

  return (
    <>
      <Layout>
        <ScrollToTopOnMount />
        <StyledScrollTop breakpoint={768} distance={800} />
        <main class="page-content">
          <Header id="header" />
          <Div id="about">
            <About />
            <Stack />
          </Div>

          {cloudMode ? <Clouds1 /> : space}

          <Projects id="projects" />

          {cloudMode ? <Clouds2 /> : space}

          <Testimonials id="testimonials" />

          {cloudMode ? <Clouds2 /> : space}

          <Contact id="contact" />
        </main>
      </Layout>
    </>
  );
}

export default Home;
