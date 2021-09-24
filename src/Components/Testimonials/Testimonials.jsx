import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { getAllTestimonials } from '../../services/testimonials.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getSortedProjects as getSortedTestimonials } from '../../utils/sortedProjects';
import getRating from '../../utils/getRating.js';
import { Box, Typography } from '@material-ui/core';
import QuoteIcon from '@material-ui/icons/FormatQuote';
import { CloudStateContext } from '../../context/animationContext.js';
import Sparkles from '../shared/Animations/Sparkles.jsx';

function Testimonials() {
  const [allTestimonials, setAllTestimonials] = useState([]);

  const [loaded, setLoaded] = useState(false);
  const [cloudMode] = useContext(CloudStateContext);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonials = await getAllTestimonials();
      setAllTestimonials(getSortedTestimonials(testimonials));
      setLoaded(true);
    };
    fetchTestimonials();
  }, []);

  const TESTIMONIALS = allTestimonials?.map((testimonial) => {
    const {
      fields: { content, date, rating, company, person, image },
    } = testimonial;

    // https://www.florin-pop.com/blog/2019/07/testimonial-card/

    return (
      <Testimonial
        className="testimonial"
        key={testimonial?.id}
        cloudMode={cloudMode}>
        <div className="testimonial-body">
          <P>{content}</P>
          <div className="quote-icon-container">
            <QuoteIcon className="quote-icon" />
          </div>
        </div>
        <br />
        <div className={'testimonial__darkShadow overflown'} />

        <footer>
          <img src={image} alt={company} />
          <Typography>{`${person} @ ${company}`}</Typography>
          <br />
          {rating && (
            <>
              <Typography>Rating provided by Upwork™</Typography>
              <Box my={1}>{getRating(rating, '⭐')}</Box>
              <Typography>{date}</Typography>
            </>
          )}
        </footer>
      </Testimonial>
    );
  });

  return (
    <>
      <section class="page-section testimonials" id="testimonials">
        <inner-column>
          <header class="section-header testimonials">
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
            <List count={allTestimonials.length} className="testimonial-list">
              {TESTIMONIALS}
            </List>
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

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
      border-radius: 100px;
      background: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
    }

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
  z-index: 1;

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

export default Testimonials;
