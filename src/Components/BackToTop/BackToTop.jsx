import React, { useEffect, useState} from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { scrollFunction } from '../../utils/scrollFunction'

const Div = styled.div`
  /* display: none; */
  position: fixed;
  width: 100px;
  height: 60px;
  bottom: 0;
  right: 0;
 background: #0B31A7;
 border-radius: 5px 0 0 0;
  z-index: 1;

  cursor: pointer;
  .arrow {
    width:120px;
}

.top-button-hidden{
  display: none;
}

.top-button-default {
  display: block;
}

.arrow-up {
  width: 0; 
  height: 0; 
  border-color:  var(--vivid-tangerine);
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 40px solid;
  margin-left: 20px;
  margin-top: 10px;
  text-shadow: 2px 2px #999;  
  box-shadow: 0 2px  #999;  
  transition: transform 250ms ease-in-out;
  color: var(--vivid-tangerine);
}

.arrow-up:hover{
  transform: translateY(-3.004px);
  transition: transform 250ms ease-in-out;
}

  @media screen and (max-width: 768px){
    display: none;
  }
`;


function BackToTop() {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
  const onScroll = (e) => {
    
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
    
  }
    
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  console.log(scrollTop)
  if (scrollTop === 1000) {
    setScrolling(true)
  } else if (scrollTop === 20) {
    setScrolling(false)
  }
  console.log(scrolling)
  
  // useEffect(() => {
  //   window.onscroll = function () {
  //     scrollFunction();
  //     setToTopButton(true)
  //   };
  // }, []);


  
  return (
    <Div className={scrolling ? 'top-button-default' : 'top-button-hidden' }>
      <Link
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        duration={1000}
        title="Go to top"
      >
        <div class="arrow-up"></div>

      </Link>
    </Div>
  );
}

export default BackToTop;
