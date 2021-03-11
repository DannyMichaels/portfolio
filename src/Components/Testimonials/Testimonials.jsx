import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllTestimonials } from "../../services/testimonials.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSortedProjects as getSortedTestimonials } from "../../utils/sortedProjects";
import getRating from "../../utils/getRating.js";
import { Box, Typography } from "@material-ui/core";
import QuoteIcon from "@material-ui/icons/FormatQuote";

const Testimonial = styled.li`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  max-width: 100%;
  width: 400px;

  .testimonial-body {
    padding: 40px 40px 80px;
    .quote-icon {
      color: #eee;
      font-size: 40px;
      float: right;
    }
  }

  footer {
    background-color: #686de0;
    color: #fff;
    padding: 40px;
    text-align: center;
    img {
      border-radius: 50%;
      border: 5px solid #fff;
      height: 120px;
      width: 120px;
      margin-top: -100px;
    }
  }
`;

const Span = styled.div`
  font-family: "Roboto", sans-serif;
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
`;

const List = styled.ol`
  display: ${({ count }) => (count > 1 ? "grid" : "flex")};
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
  }
`;

function Testimonials() {
  const [allTestimonials, setAllTestimonials] = useState([]);
  const [loaded, setLoaded] = useState(false);

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
      <Testimonial className="project" key={testimonial?.id}>
        <div className="testimonial-body">
          <P>{content}</P>
          <QuoteIcon className="quote-icon" />
        </div>
        <br />

        <footer>
          <img src={image} alt={company} />
          <Typography>{`${person} @ ${company}`}</Typography>
          <br />
          {rating && (
            <>
              <Typography>Rating provided by Upwork™</Typography>
              <Box my={1}>{getRating(rating, "⭐")}</Box>
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
              <Span className="span">T</Span>
              <Span className="span">e</Span>
              <Span className="span">s</Span>
              <Span className="span">t</Span>
              <Span className="span">i</Span>
              <Span className="span">m</Span>
              <Span className="span">o</Span>
              <Span className="span">n</Span>
              <Span className="span">i</Span>
              <Span className="span">a</Span>
              <Span className="span">l</Span>
              <Span className="span">s</Span>
            </h2>
          </header>
          {loaded ? (
            <List count={allTestimonials.length} className="testimonial-list">
              {TESTIMONIALS}
            </List>
          ) : (
            <CircularProgress />
          )}
        </inner-column>
      </section>
    </>
  );
}

export default Testimonials;
