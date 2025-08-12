import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "@material-ui/core";
import { PlayArrow, Code, Web } from "@material-ui/icons";

const hologramGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3),
                0 0 60px rgba(102, 126, 234, 0.2);
  }
  50% { 
    box-shadow: 0 0 50px rgba(0, 255, 255, 0.5),
                0 0 100px rgba(102, 126, 234, 0.3);
  }
`;

const scanLine = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
`;

const CarouselStage = styled.div`
  position: relative;
  width: 100%;
  height: 750px; /* Increased height for taller cards */
  perspective: 2000px;
  perspective-origin: 50% 40%;
  overflow: visible;
  padding-bottom: 80px;

  // Stage lighting effect
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: calc(100% - 80px);
    background: radial-gradient(
      ellipse at center top,
      rgba(0, 255, 255, 0.1) 0%,
      rgba(102, 126, 234, 0.05) 40%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 650px;
    padding-bottom: 60px;
  }
`;

const ProjectHologram = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 900px;
  height: 500px; /* Increased from 400px to 500px */
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => `
    translate(-50%, -50%) 
    rotateY(${props.rotation}deg) 
    translateZ(${props.distance}px)
    ${props.isActive ? "scale(1)" : "scale(0.6)"}
    rotateX(${props.isActive ? "0deg" : "-10deg"})
  `};
  opacity: ${(props) => (props.isActive ? 1 : 0.3)};
  z-index: ${(props) => (props.isActive ? 10 : props.zIndex || 1)};
  pointer-events: ${(props) => (props.isActive ? "auto" : "none")};

  @media (max-width: 768px) {
    width: 90vw;
    height: 450px; /* Increased mobile height too */
    top: 35%;
  }
`;

const HologramCard = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 20, 40, 0.95) 0%,
    rgba(10, 30, 60, 0.9) 50%,
    rgba(0, 20, 40, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  position: relative;
  animation: ${(props) => (props.isActive ? hologramGlow : "none")} 4s
    ease-in-out infinite;

  // Scanning line effect
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 255, 255, 0.1) 20%,
      rgba(0, 255, 255, 0.3) 50%,
      rgba(0, 255, 255, 0.1) 80%,
      transparent 100%
    );
    animation: ${(props) => (props.isActive ? scanLine : "none")} 3s linear
      infinite;
    z-index: 10;
    pointer-events: none;
  }

  // Corner accents
  &::after {
    content: "";
    position: absolute;
    inset: 10px;
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 15px;
    pointer-events: none;
  }
`;

const ImageSection = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.2) 0%,
    rgba(240, 147, 251, 0.1) 50%,
    rgba(254, 202, 87, 0.2) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(0, 255, 255, 0.3);

  // Grid overlay
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(0, 255, 255, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
  }
`;

const ProjectImage = styled.div`
  width: 90%;
  height: 60%; /* Reduced height for more normal aspect ratio */
  border: 1px solid rgba(0, 255, 255, 0.4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${(props) => `url(${props.imageUrl})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  // Placeholder content when no image
  &::after {
    content: ${(props) => (props.hasImage ? "''" : "'PROJECT\\AVIEWER'")};
    font-family: "Courier New", monospace;
    font-size: 1rem;
    color: rgba(0, 255, 255, 0.8);
    letter-spacing: 2px;
    text-align: center;
    line-height: 1.4;
    white-space: pre;
  }

  // Corner brackets
  &::before {
    content: "";
    position: absolute;
    inset: 5px;
    border: 1px dashed rgba(0, 255, 255, 0.3);
    border-radius: 8px;
  }

  // Overlay for better text readability on images
  ${(props) =>
    props.hasImage &&
    `
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, 
        rgba(0, 255, 255, 0.1) 0%,
        rgba(102, 126, 234, 0.1) 100%);
    }
  `}
`;

const ContentSection = styled.div`
  width: 60%;
  height: 100%;
  padding: 35px 35px 120px 35px; /* Increased bottom padding for more button space */
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProjectHeader = styled.div`
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #00ffff;
  margin: 0 0 10px 0;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProjectId = styled.div`
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  color: rgba(0, 255, 255, 0.7);
  letter-spacing: 1px;

  &::before {
    content: "> ";
    color: #00ffff;
  }
`;

const ProjectDescription = styled.div`
  margin: 20px 0;
  max-height: 240px; /* Increased from 180px to 240px for more space */
  overflow-y: auto;
  padding-right: 10px;
  flex: 1; /* Take up available space */

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 255, 255, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 255, 0.4);
    border-radius: 2px;

    &:hover {
      background: rgba(0, 255, 255, 0.6);
    }
  }
`;

const DescriptionText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TechStackSection = styled.div`
  margin: 20px 0 0 0; /* Removed bottom margin to save space */
`;

const TechLabel = styled.div`
  font-family: "Courier New", monospace;
  font-size: 0.8rem;
  color: rgba(0, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;

  &::before {
    content: "[";
    color: #00ffff;
  }

  &::after {
    content: "]";
    color: #00ffff;
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechChip = styled.span`
  font-family: "Courier New", monospace;
  font-size: 0.75rem;
  color: #00ffff;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 6px 12px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
`;

const ActionFooter = styled.div`
  position: absolute;
  bottom: 35px;
  left: 35px;
  display: flex;
  gap: 15px;
  align-items: center;
`;

const HologramButton = styled(Button)`
  && {
    background: linear-gradient(
      45deg,
      rgba(0, 255, 255, 0.1) 0%,
      rgba(102, 126, 234, 0.1) 100%
    );
    border: 2px solid rgba(0, 255, 255, 0.4);
    color: #00ffff;
    font-family: "Courier New", monospace;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(
        45deg,
        rgba(0, 255, 255, 0.2) 0%,
        rgba(102, 126, 234, 0.2) 100%
      );
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
      transform: translateY(-2px);
      border-color: rgba(0, 255, 255, 0.8);
    }

    .MuiButton-startIcon {
      margin-right: 8px;
    }
  }
`;

const NavigationControls = styled.div`
  position: absolute;
  bottom: 60px; /* Much closer to the cards */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 25px;
  z-index: 100;

  @media (max-width: 768px) {
    bottom: 40px;
    gap: 20px;
  }
`;

const NavButton = styled.button`
  background: linear-gradient(
    45deg,
    rgba(0, 20, 40, 0.9) 0%,
    rgba(10, 30, 60, 0.8) 100%
  );
  border: 2px solid rgba(0, 255, 255, 0.4);
  color: #00ffff;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(
      45deg,
      rgba(0, 255, 255, 0.2) 0%,
      rgba(102, 126, 234, 0.2) 100%
    );
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
    transform: translateY(-3px);
    border-color: rgba(0, 255, 255, 0.8);
  }

  &.active {
    background: linear-gradient(
      45deg,
      rgba(0, 255, 255, 0.3) 0%,
      rgba(102, 126, 234, 0.3) 100%
    );
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
  }
`;

const ProjectCounter = styled.div`
  position: absolute;
  top: 20px; /* Moved higher */
  right: 50px; /* Moved further from edge */
  font-family: "Courier New", monospace;
  color: rgba(0, 255, 255, 0.8);
  font-size: 1.2rem;
  z-index: 100;

  .current {
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
    color: #00ffff;
  }

  .separator {
    margin: 0 10px;
    opacity: 0.6;
  }

  .total {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 20px;
    font-size: 1rem;

    .current {
      font-size: 1.5rem;
    }
  }
`;

export default function ProjectCarousel3D({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const totalProjects = projects.length;

  // Auto rotation
  useEffect(() => {
    if (!isAutoRotating || totalProjects <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotating, totalProjects]);

  const handleNavigation = (direction) => {
    setIsAutoRotating(false);
    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    } else {
      setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    }
  };

  const selectProject = (index) => {
    setIsAutoRotating(false);
    setCurrentIndex(index);
  };

  return (
    <CarouselStage>
      <ProjectCounter>
        <span className="current">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className="separator">/</span>
        <span className="total">{String(totalProjects).padStart(2, "0")}</span>
      </ProjectCounter>

      {projects.map((project, index) => {
        // Spread projects more across the circle
        const offset = (index - currentIndex) * 60; // 60 degrees apart
        const distance = index === currentIndex ? 0 : -500; // Further back
        const isActive = index === currentIndex;

        return (
          <ProjectHologram
            key={project.id || index}
            rotation={offset}
            distance={distance}
            isActive={isActive}
            zIndex={isActive ? 10 : Math.abs(index - currentIndex)}
            onClick={() => selectProject(index)}
          >
            <HologramCard isActive={isActive}>
              <ImageSection>
                <ProjectImage
                  hasImage={
                    !!(project?.fields?.img_url || project?.fields?.image)
                  }
                  imageUrl={
                    project?.fields?.img_url ||
                    project?.fields?.image ||
                    project?.image
                  }
                />
              </ImageSection>

              <ContentSection>
                <ProjectHeader>
                  <ProjectTitle>
                    {project?.name ||
                      project?.fields?.name ||
                      `Project_${index + 1}`}
                  </ProjectTitle>
                  <ProjectId>
                    ID: {String(index + 1).padStart(3, "0")}_PORTFOLIO
                  </ProjectId>
                </ProjectHeader>

                <ProjectDescription>
                  <DescriptionText>
                    {project?.description ||
                      project?.fields?.description ||
                      "Advanced full-stack application showcasing modern development practices and innovative solutions."}
                  </DescriptionText>
                </ProjectDescription>

                <TechStackSection>
                  <TechLabel>Tech Stack</TechLabel>
                  <TechGrid>
                    {project?.fields?.tech_name1 && (
                      <TechChip>{project.fields.tech_name1}</TechChip>
                    )}
                    {project?.fields?.tech_name2 && (
                      <TechChip>{project.fields.tech_name2}</TechChip>
                    )}
                    {project?.fields?.tech_name3 && (
                      <TechChip>{project.fields.tech_name3}</TechChip>
                    )}
                    {project?.fields?.tech_name4 && (
                      <TechChip>{project.fields.tech_name4}</TechChip>
                    )}
                  </TechGrid>
                </TechStackSection>

                <ActionFooter>
                  {(project?.fields?.github || project?.github) && (
                    <HologramButton
                      startIcon={<Code />}
                      href={project?.fields?.github || project?.github}
                      target="_blank"
                    >
                      Source
                    </HologramButton>
                  )}
                  {(project?.fields?.deployed ||
                    project?.fields?.website ||
                    project?.deployed ||
                    project?.website) && (
                    <HologramButton
                      startIcon={<Web />}
                      href={
                        project?.fields?.deployed ||
                        project?.fields?.website ||
                        project?.deployed ||
                        project?.website
                      }
                      target="_blank"
                    >
                      Live Site
                    </HologramButton>
                  )}
                  {(project?.fields?.video || project?.video) && (
                    <HologramButton
                      startIcon={<PlayArrow />}
                      href={project?.fields?.video || project?.video}
                      target="_blank"
                    >
                      Demo
                    </HologramButton>
                  )}
                </ActionFooter>
              </ContentSection>
            </HologramCard>
          </ProjectHologram>
        );
      })}

      <NavigationControls>
        <NavButton onClick={() => handleNavigation("prev")}>
          ← Previous
        </NavButton>
        <NavButton
          className={isAutoRotating ? "active" : ""}
          onClick={() => setIsAutoRotating(!isAutoRotating)}
        >
          {isAutoRotating ? "Auto Mode" : "Manual"}
        </NavButton>
        <NavButton onClick={() => handleNavigation("next")}>Next →</NavButton>
      </NavigationControls>
    </CarouselStage>
  );
}
