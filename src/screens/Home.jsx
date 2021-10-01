import { useContext } from 'react';
import Skills from '../Components/Home/Skills';
import Projects from '../Components/Projects/Projects';
import Layout from '../Components/shared/Layout/Layout';
import Header from '../Components/Header/Header';
import StyledScrollTop from '../Components/BackToTop/StyledScrollTop';
import About from '../Components/Home/About';
import ScrollToTopOnMount from '../Components/BackToTop/ScrollToTopOnMount';
import styled from 'styled-components';
import Contact from '../Form/Contact';
import Testimonials from '../Components/Home/Testimonials';
import { CloudsSection, CloudsSectionAlt } from '../Components/Clouds/Clouds';
import { CloudStateContext } from '../context/cloudContext';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  const [cloudMode] = useContext(CloudStateContext);

  const emptySpaceJSX = <div className="page-break" />;

  return (
    <>
      <ScrollToTopOnMount />

      <Layout>
        <StyledScrollTop breakpoint={768} distance={800} />
        <main className="page-content">
          <Header id="header" />

          {/* spacer */}
          <div className="page-break" />

          <Div id="about">
            <Fade direction="left" triggerOnce delay={20} fraction={0.25}>
              <About />
            </Fade>
            <Fade direction="right" triggerOnce delay={20} fraction={0.25}>
              <Skills />
            </Fade>
          </Div>

          {cloudMode ? <CloudsSection /> : emptySpaceJSX}

          <Projects id="projects" />

          {cloudMode ? <CloudsSectionAlt /> : emptySpaceJSX}

          <Testimonials id="testimonials" />

          {cloudMode ? <CloudsSectionAlt /> : emptySpaceJSX}

          <Fade triggerOnce>
            <Contact id="contact" />
          </Fade>
        </main>
      </Layout>
    </>
  );
}

let Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
  min-height: 90vh;

  @media screen and (max-width: 1100px) {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 100px;
  }
`;
