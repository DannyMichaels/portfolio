import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "@material-ui/core";
import { PlayArrow, Code, Web } from "@material-ui/icons";

const cloudGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 20px 60px rgba(155, 89, 182, 0.3),
                0 0 80px rgba(52, 152, 219, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  50% { 
    box-shadow: 0 30px 80px rgba(155, 89, 182, 0.4),
                0 0 120px rgba(52, 152, 219, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }
`;

const cloudFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.02);
  }
`;

const sparkleShimmer = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const CarouselStage = styled.div`
  position: relative;
  width: 100%;
  height: 750px; /* Increased height for taller cards */
  perspective: 2000px;
  perspective-origin: 50% 40%;
  overflow: visible;
  padding-bottom: 80px;



  @media (max-width: 768px) {
    height: 650px;
    padding-bottom: 60px;
  }
`;

const EnchantedCard = styled.div`
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

const CloudCard = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(248, 250, 252, 0.9) 50%,
    rgba(240, 245, 251, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  position: relative;
  animation: ${(props) => (props.isActive ? cloudGlow : cloudFloat)} 8s
    ease-in-out infinite;
  box-shadow: 0 25px 80px rgba(155, 89, 182, 0.25),
              0 0 60px rgba(52, 152, 219, 0.15),
              inset 0 2px 0 rgba(255, 255, 255, 0.4);

  // Subtle sparkle effects
  &::before {
    content: "✨";
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 1rem;
    animation: ${(props) => (props.isActive ? sparkleShimmer : "none")} 3s
      ease-in-out infinite;
    z-index: 10;
    pointer-events: none;
  }

  // Dreamy cloud-like inner glow
  &::after {
    content: "";
    position: absolute;
    inset: 12px;
    border-radius: 25px;
    background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(52, 152, 219, 0.1) 30%,
      rgba(155, 89, 182, 0.1) 70%,
      rgba(255, 255, 255, 0.3) 100%);
    opacity: 0.6;
    pointer-events: none;
  }
`;

const ImageSection = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(52, 152, 219, 0.15) 0%,
    rgba(155, 89, 182, 0.1) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid rgba(255, 255, 255, 0.3);


`;

const ProjectImage = styled.div`
  width: 90%;
  height: 60%; /* Reduced height for more normal aspect ratio */
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 12px 35px rgba(155, 89, 182, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${(props) => 
    props.hasImage 
      ? `url(${props.imageUrl})` 
      : 'linear-gradient(45deg, rgba(255, 255, 255, 0.8) 0%, rgba(196, 181, 253, 0.3) 100%)'
  };
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
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
  font-family: "Sora", serif;
  font-size: 2.2rem;
  font-weight: 600;
  color: #6b46c1;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 15px rgba(155, 89, 182, 0.3);
  letter-spacing: 1px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProjectId = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: rgba(52, 152, 219, 0.8);
  letter-spacing: 0.5px;
  font-style: italic;

  &::before {
    content: "✨ ";
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
    background: rgba(196, 181, 253, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, 
      rgba(139, 92, 246, 0.4) 0%,
      rgba(196, 181, 253, 0.4) 100%);
    border-radius: 2px;

    &:hover {
      background: linear-gradient(180deg, 
        rgba(139, 92, 246, 0.6) 0%,
        rgba(196, 181, 253, 0.6) 100%);
    }
  }
`;

const DescriptionText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(71, 85, 105, 0.9);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TechStackSection = styled.div`
  margin: 20px 0 0 0; /* Removed bottom margin to save space */
`;

const TechLabel = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.85rem;
  color: rgba(99, 102, 241, 0.8);
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 10px;

  &::before {
    content: "💫 ";
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechChip = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  color: #7c3aed;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.8) 0%,
    rgba(196, 181, 253, 0.3) 100%);
  border: 1.5px solid rgba(139, 92, 246, 0.4);
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 3px 12px rgba(139, 92, 246, 0.15);

  &:hover {
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.9) 0%,
      rgba(196, 181, 253, 0.4) 100%);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.25);
    transform: translateY(-2px);
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

const DreamyButton = styled(Button)`
  && {
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(196, 181, 253, 0.3) 100%
    );
    border: 2px solid rgba(139, 92, 246, 0.4);
    color: #7c3aed;
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 25px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.2);

    &:hover {
      background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.95) 0%,
        rgba(196, 181, 253, 0.4) 100%
      );
      box-shadow: 0 8px 30px rgba(139, 92, 246, 0.3);
      transform: translateY(-2px);
      border-color: rgba(139, 92, 246, 0.6);
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
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 250, 252, 0.8) 100%
  );
  border: 2px solid rgba(139, 92, 246, 0.4);
  color: #7c3aed;
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);

  &:hover {
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(196, 181, 253, 0.4) 100%
    );
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.3);
    transform: translateY(-3px);
    border-color: rgba(139, 92, 246, 0.6);
  }

  &.active {
    background: linear-gradient(
      45deg,
      rgba(196, 181, 253, 0.6) 0%,
      rgba(139, 92, 246, 0.3) 100%
    );
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.4);
    color: #ffffff;
    text-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
  }
`;

const ProjectCounter = styled.div`
  position: absolute;
  top: 20px; /* Moved higher */
  right: 50px; /* Moved further from edge */
  font-family: "Sora", serif;
  color: rgba(139, 92, 246, 0.8);
  font-size: 1.2rem;
  z-index: 100;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 250, 252, 0.8) 100%);
  padding: 12px 20px;
  border-radius: 25px;
  border: 2px solid rgba(196, 181, 253, 0.4);
  backdrop-filter: blur(15px);
  box-shadow: 0 10px 35px rgba(139, 92, 246, 0.2);

  .current {
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 0 2px 15px rgba(139, 92, 246, 0.3);
    color: #7c3aed;
  }

  .separator {
    margin: 0 10px;
    opacity: 0.6;
    color: rgba(196, 181, 253, 0.8);
  }

  .total {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 20px;
    font-size: 1rem;
    padding: 8px 16px;

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

  // Arrow key navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        handleNavigation('prev');
      } else if (event.key === 'ArrowRight') {
        handleNavigation('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [totalProjects]);

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
          <EnchantedCard
            key={project.id || index}
            rotation={offset}
            distance={distance}
            isActive={isActive}
            zIndex={isActive ? 10 : Math.abs(index - currentIndex)}
            onClick={() => selectProject(index)}
          >
            <CloudCard isActive={isActive}>
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
                    <DreamyButton
                      startIcon={<Code />}
                      href={project?.fields?.github || project?.github}
                      target="_blank"
                    >
                      Source
                    </DreamyButton>
                  )}
                  {(project?.fields?.deployed ||
                    project?.fields?.website ||
                    project?.deployed ||
                    project?.website) && (
                    <DreamyButton
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
                    </DreamyButton>
                  )}
                  {(project?.fields?.video || project?.video) && (
                    <DreamyButton
                      startIcon={<PlayArrow />}
                      href={project?.fields?.video || project?.video}
                      target="_blank"
                    >
                      Demo
                    </DreamyButton>
                  )}
                </ActionFooter>
              </ContentSection>
            </CloudCard>
          </EnchantedCard>
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
