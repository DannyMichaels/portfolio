import Stack from "../Components/Stack/Stack";
import Projects from "../Components/Projects/Projects";
import Layout from "../Components/shared/Layout/Layout";
import Header from "../Components/Header/Header";
import StyledScrollTop from "../Components/BackToTop/StyledScrollTop";
import About from "../Components/Home/About";
import ScrollToTopOnMount from "../Components/BackToTop/ScrollToTopOnMount";
import styled from "styled-components";
import Contact from "../Form/Contact";

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
const CloudBig = styled.img`
  @keyframes float {
    0% {
      box-shadow: none;
      transform: translateY(0px);
    }
    50% {
      box-shadow: none;
      transform: translateY(-20px);
    }

    100% {
      box-shadow: none;
      transform: translateY(0px);
    }
  }
  z-index: -2;
  filter: blur(4px);
  z-index: 0;
  opacity: 0.5;
  user-select: none;
  cursor: pointer;
  margin: 10px;
  transform: translatey(0px);
  box-shadow: none;
  animation: float 6s ease-in-out infinite;
  margin-top: -60px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    max-width: 150px;
    object-fit: contain;
  }
`;
let Giv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
let Biv = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

let Ziv = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
let Liv = styled.div`
  margin-top: 100px;
`;

function Home() {
  return (
    <>
      <Layout>
        <ScrollToTopOnMount />
        <StyledScrollTop breakpoint={768} distance={800} />
        <main class="page-content">
          <Header id="header" />
          <Div id="about">
            {/* <section class="page-section about-me" id="about-me"> */}
            {/* <inner-column> */}
            <About />
            <Stack />
            {/* </inner-column> */}
            {/* </section> */}
          </Div>
          <Giv className="desktop">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Giv>
          <Giv className="desktop">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Giv>

          <Biv className="mobile">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Biv>
          <Biv className="mobile">
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
            <CloudBig className="cloud" src="https://i.imgur.com/UOQ3aCS.png" />
          </Biv>

          <Projects id="projects" />

          <Liv>
            <Giv className="desktop">
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
            </Giv>

            <Giv className="desktop">
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
            </Giv>

            <Ziv className="mobile">
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
            </Ziv>
            <Ziv className="mobile">
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
              <CloudBig
                className="cloud"
                src="https://i.imgur.com/UOQ3aCS.png"
              />
            </Ziv>
          </Liv>
          <Contact id="contact" />
        </main>
      </Layout>
    </>
  );
}

export default Home;
