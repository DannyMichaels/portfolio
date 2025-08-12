import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { getAllTestimonials } from '../../services/testimonials.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getSortedProjects as getSortedTestimonials } from '../../utils/sortedProjects';
import { Typography, Chip } from '@material-ui/core';
import QuoteIcon from '@material-ui/icons/FormatQuote';
import StarIcon from '@material-ui/icons/Star';
import { CloudStateContext } from '../../context/cloudContext.js';
import Sparkles from '../shared/Animations/Sparkles.jsx';
import TestimonialMore from './TestimonialMore';
import GlassButton from '../shared/GlassButton/GlassButton';
import { Fade, Slide } from 'react-awesome-reveal';

function Testimonials() {
  const [allTestimonials, setAllTestimonials] = useState([]);

  const [loaded, setLoaded] = useState(false);
  const [cloudMode] = useContext(CloudStateContext);

  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonials = await getAllTestimonials();
      setAllTestimonials(getSortedTestimonials(testimonials));
      setLoaded(true);
    };
    fetchTestimonials();
  }, []);

  const TESTIMONIALS = allTestimonials?.map((testimonial, index) => {
    const {
      fields: { content, date, rating, company, person, image },
    } = testimonial;

    const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          className={`star ${i < rating ? 'filled' : 'empty'}`}
        />
      ));
    };

    return (
      <Slide direction="up" delay={index * 100} triggerOnce key={testimonial?.id}>
        <TestimonialCard
          className="testimonial"
          cloudMode={cloudMode}>
          <QuoteIconContainer>
            <QuoteIcon className="quote-icon" />
          </QuoteIconContainer>
          
          <TestimonialContent>
            <ContentText>{content}</ContentText>
          </TestimonialContent>

          <TestimonialFooter>
            <CompanyLogo src={image} alt={company} />
            
            <PersonInfo>
              <PersonName>{person}</PersonName>
              <CompanyName>{company}</CompanyName>
            </PersonInfo>

            {rating && (
              <RatingSection>
                <StarsContainer>
                  {renderStars(Math.round(rating))}
                </StarsContainer>
                <RatingText>Rating: {rating}/5</RatingText>
                <Chip 
                  label="Upwork™ Verified" 
                  size="small" 
                  className="upwork-chip"
                />
              </RatingSection>
            )}

            <DateText>{date}</DateText>

            <GlassButton
              onClick={() => setViewMore(testimonial?.id)}
              size="medium"
              variant="default"
              iconHover="translate(2px, -2px)">
              <span>View Details</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </GlassButton>
          </TestimonialFooter>

          <TestimonialMore
            testimonial={testimonial}
            open={viewMore === testimonial?.id}
            onClose={() => setViewMore(false)}
          />
        </TestimonialCard>
      </Slide>
    );
  });

  return (
    <>
      <section className="page-section testimonials" id="testimonials">
        <inner-column>
          <header className="section-header testimonials">
            <h2 className="projects-h1">
              <Sparkles>
                {[...'Testimonials'].map((letter, key) => (
                  <Span className="span" key={key}>
                    {letter}
                  </Span>
                ))}
              </Sparkles>
            </h2>
          </header>
          <br />
          {loaded ? (
            <Fade triggerOnce>
              <List count={allTestimonials.length} className="testimonial-list">
                {TESTIMONIALS}
              </List>
            </Fade>
          ) : (
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}>
              <CircularProgress size={80} />
            </div>
          )}
        </inner-column>
      </section>
    </>
  );
}

const Testimonial = styled.li`
  @keyframes cardFloat {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 699px) {
    margin: 20px;
  }

  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  max-width: 100%;
  width: 400px;
  transform: translatey(0px);
  animation: ${(props) =>
    props.cloudMode && 'cardFloat 6s ease-in-out infinite'};

  .testimonial-body {
    padding: 20px 20px 80px;

    max-height: 340px;
    min-height: 340px;
    overflow-y: auto;

    .quote-icon {
      color: #eee;
      font-size: 40px;
      float: right;
    }
  }

  .testimonial__darkShadow {
    position: relative;
    width: 100%;
    height: 6em;
    border-bottom: 2px solid #404040;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin: auto;
    box-sizing: inherit;

    &.hidden {
      display: none;
    }

    &.overflown {
      z-index: -1;
      margin-top: -6em;
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(#181818),
        color-stop(20%, rgba(24, 24, 24, 0.7)),
        color-stop(30%, rgba(24, 24, 24, 0.4)),
        color-stop(50%, transparent)
      );
      background-image: -webkit-linear-gradient(
        bottom,
        #181818 0,
        rgba(24, 24, 24, 0.7) 20%,
        rgba(24, 24, 24, 0.4) 30%,
        transparent 50%
      );
      background-image: -moz-
        oldlinear-gradient(
          bottom,
          #181818 0,
          rgba(24, 24, 24, 0.7) 20%,
          rgba(24, 24, 24, 0.4) 30%,
          transparent 50%
        );
      background-image: -o-linear-gradient(
        bottom,
        #181818 0,
        rgba(24, 24, 24, 0.7) 20%,
        rgba(24, 24, 24, 0.4) 30%,
        transparent 50%
      );
      background-image: linear-gradient(
        to top,
        #181818 0,
        rgba(24, 24, 24, 0.7) 20%,
        rgba(24, 24, 24, 0.4) 30%,
        transparent 50%
      );
    }
  }

  footer {
    background-color: #686de0;
    color: #fff;
    padding: 40px;
    text-align: center;
    z-index: 4;

    .testimonial__person {
      margin: 10px 0;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .testimonial__more--button {
      transition: transform 250ms ease-in-out;

      &:hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }

    img {
      // company logo
      background: #fff; // png fallback
      object-fit: contain;
      border-radius: 50%;
      border: 5px solid #fff;
      height: 120px;
      width: 120px;
      margin-top: -100px;
      position: relative;
    }
  }
`;

const Span = styled.div`
  font-family: 'Roboto', sans-serif;
  transition: transform 250ms ease-out;
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  flex-direction: row;
  width: auto;
  z-index: 100;  /* Increased to be above clouds */
  position: relative;
  isolation: isolate;  /* Prevents blur inheritance */

  &:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }
`;

const P = styled(Typography)`
  color: #555;
  font-size: 20px;
  line-height: 36px;
  margin: 0;
  padding: 10px;
`;

const List = styled.ol`
  display: ${({ count }) => (count > 1 ? 'grid' : 'flex')};
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(1fr);
  /* https://css-tricks.com/snippets/css/complete-guide-grid/ */
  grid-gap: 30px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px;
  }

  @media (max-width: 699px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;

const TestimonialCard = styled.div`
  @keyframes glassFloat {
    0% {
      transform: translateY(0px) rotateX(0deg);
      box-shadow: 0 10px 40px rgba(31, 38, 135, 0.15);
    }
    50% {
      transform: translateY(-15px) rotateX(2deg);
      box-shadow: 0 25px 60px rgba(31, 38, 135, 0.25);
    }
    100% {
      transform: translateY(0px) rotateX(0deg);
      box-shadow: 0 10px 40px rgba(31, 38, 135, 0.15);
    }
  }

  position: relative;
  width: 100%;
  max-width: 420px;
  height: 520px; /* Fixed height for all cards */
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 20px 10px;
  border-radius: 24px;
  overflow: hidden;
  
  // Glassmorphic background
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.12) 0%, 
    rgba(255, 255, 255, 0.06) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  box-shadow: 0 15px 35px rgba(31, 38, 135, 0.2),
              0 8px 15px rgba(31, 38, 135, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
  
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
  
  animation: ${(props) =>
    props.cloudMode ? 'glassFloat 8s ease-in-out infinite' : 'none'};
  
  // Gradient border effect
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      var(--primary, #667ee6) 0%, 
      var(--secondary, #764ba2) 50%,
      var(--accent, #f093fb) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.18) 0%, 
      rgba(255, 255, 255, 0.09) 100%);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 25px 50px rgba(31, 38, 135, 0.3),
                0 15px 25px rgba(31, 38, 135, 0.15),
                0 0 30px rgba(102, 126, 230, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.25);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media screen and (max-width: 699px) {
    margin: 15px 5px;
    min-height: 450px;
    max-width: 90vw;
  }
`;

const QuoteIconContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  z-index: 2;
  
  .quote-icon {
    font-size: 32px;
    color: rgba(255, 255, 255, 0.15);
    transform: rotate(180deg);
  }
`;

const TestimonialContent = styled.div`
  padding: 40px 30px 20px;
  position: relative;
  z-index: 1;
  flex: 1;
  overflow-y: auto;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, 
      rgba(102, 126, 234, 0.6) 0%, 
      rgba(118, 75, 162, 0.6) 100%);
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: linear-gradient(180deg, 
        rgba(102, 126, 234, 0.8) 0%, 
        rgba(118, 75, 162, 0.8) 100%);
    }
  }
`;

const ContentText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  &::before {
    content: '"';
    font-size: 20px;
    color: rgba(255, 255, 255, 0.4);
    margin-right: 4px;
  }
  
  &::after {
    content: '"';
    font-size: 20px;
    color: rgba(255, 255, 255, 0.4);
    margin-left: 4px;
  }
`;

const TestimonialFooter = styled.div`
  padding: 20px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
  margin-top: auto; /* Push to bottom of flex container */
  flex-shrink: 0; /* Prevent shrinking */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30px;
    right: 30px;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.2) 50%, 
      transparent 100%);
  }
`;

const CompanyLogo = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: contain; /* Changed from cover to contain */
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.95); /* More opaque background */
  padding: 1px; /* Increased padding for better fit */
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.08);
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 1);
  }
`;

const PersonInfo = styled.div`
  text-align: center;
`;

const PersonName = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 4px 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const CompanyName = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  letter-spacing: 0.5px;
`;

const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 4px;
  
  .star {
    font-size: 18px;
    transition: all 0.2s ease;
    
    &.filled {
      color: #ffd700;
      filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.4));
    }
    
    &.empty {
      color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const RatingText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  margin-top: -4px;
`;

const DateText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
`;

// Removed ViewMoreButton - now using reusable GlassButton component

// Global styles for Material-UI components
const globalStyles = `
  .upwork-chip {
    background: linear-gradient(90deg, #14a800, #00c41a) !important;
    color: white !important;
    font-size: 10px !important;
    font-weight: 500 !important;
    border-radius: 8px !important;
    height: 20px !important;
  }
`;

// Inject global styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = globalStyles;
  document.head.appendChild(styleSheet);
}

export default Testimonials;
