import Stack from "../Components/Stack/Stack";
import Projects from "../Components/Projects/Projects";
import Layout from "../Components/shared/Layout/Layout";
import Header from "../Components/Header/Header";
import StyledScrollTop from "../Components/BackToTop/StyledScrollTop";
import About from "../Components/Home/About";
import ScrollToTopOnMount from "../Components/BackToTop/ScrollToTopOnMount";
import styled from "styled-components";
import Contact from "../Form/Contact";
import LinearProgress from "@material-ui/core/LinearProgress";
let Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 100px;
  flex-flow: row wrap;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /* background-image: url("https://anima-uploads.s3.amazonaws.com/projects/5fb14441119f80c2053ea467/releases/5fb14452ac34b30698d1c801/img/01maindemo-rectangle-2-F05F0B6A-9C51-4A16-A795-BC7F67EC0F4E.png"); */
`;
const CloudBig = styled.img`
  @keyframes float {
    0% {
      box-shadow: none;

      transform: translatey(0px);
    }
    50% {
      box-shadow: none;

      transform: translatey(-20px);
    }

    100% {
      box-shadow: none;
      transform: translatey(0px);
    }
  }
  /* margin-top: -200px; */
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
`;
let Giv = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function Home() {
  return (
    <>
      <Layout>
        <ScrollToTopOnMount />
        <StyledScrollTop breakpoint={768} distance={800} />
        <Header id="header" />
        <Div>
          <About id="about" />
          <Stack id="about" />
        </Div>
        <Giv>
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
        <Projects id="projects" />
        {/* <Contact id="contact" /> */}
      </Layout>
    </>
  );
}

export default Home;
