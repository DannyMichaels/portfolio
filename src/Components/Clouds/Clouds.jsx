import React from 'react';
import styled from 'styled-components';
import CloudImg from '../../assets/images/cloud.png';

const CloudContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;  /* Changed from hidden to visible to prevent clipping */
  pointer-events: none;
  z-index: 0;  /* Reduced from 2 to 0 to stay behind content */
`;

const CloudRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  position: relative;
  
  &.parallax-slow {
    animation: cloudDrift 60s linear infinite;
  }
  
  &.parallax-medium {
    animation: cloudDrift 40s linear infinite;
  }
  
  &.parallax-fast {
    animation: cloudDrift 25s linear infinite reverse;
  }
  
  @keyframes cloudDrift {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Cloud = styled.img`
  filter: blur(${props => props.blur || '2px'});
  opacity: ${props => props.opacity || 0.6};
  user-select: none;
  cursor: pointer;
  transform: translateY(0px) scale(${props => props.scale || 1});
  animation: float ${props => props.floatDuration || '8s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  object-fit: contain;
  width: ${props => props.size || '200px'};
  height: auto;
  pointer-events: auto;
  transition: all 0.3s ease;
  
  &:hover {
    filter: blur(0px);
    opacity: 0.9;
    transform: translateY(-10px) scale(1.1);
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) scale(${props => props.scale || 1});
    }
    25% {
      transform: translateY(-${props => props.floatHeight || '15px'}) scale(${props => (props.scale || 1) * 1.02});
    }
    75% {
      transform: translateY(${props => props.floatHeight || '15px'}) scale(${props => (props.scale || 1) * 0.98});
    }
  }
  
  @media screen and (max-width: 768px) {
    width: ${props => props.mobileSize || '120px'};
  }
`;

const GlassmorphicCloud = styled.div`
  position: relative;
  width: 200px;
  height: 80px;
  animation: glassDrift 30s ease-in-out infinite;
  
  /* Create cloud shape with multiple circular elements */
  &::before,
  &::after,
  & > span {
    position: absolute;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;
  }
  
  /* Bottom left puff */
  &::before {
    content: '';
    width: 50px;
    height: 50px;
    bottom: 0;
    left: 20px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2),
                0 4px 20px rgba(255, 255, 255, 0.1);
  }
  
  /* Bottom right puff */
  &::after {
    content: '';
    width: 60px;
    height: 60px;
    bottom: 0;
    right: 20px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2),
                0 4px 20px rgba(255, 255, 255, 0.1);
  }
  
  @keyframes glassDrift {
    0%, 100% {
      transform: translateX(0) translateY(0) scale(1);
    }
    33% {
      transform: translateX(30px) translateY(-20px) scale(1.1);
    }
    66% {
      transform: translateX(-20px) translateY(10px) scale(0.95);
    }
  }
`;

const CloudPuff = styled.span`
  &:nth-child(1) {
    width: 70px;
    height: 70px;
    top: -10px;
    left: 30px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2),
                0 4px 20px rgba(255, 255, 255, 0.1);
  }
  
  &:nth-child(2) {
    width: 80px;
    height: 80px;
    top: -20px;
    left: 60px;
    box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.2),
                0 4px 25px rgba(255, 255, 255, 0.1);
  }
  
  &:nth-child(3) {
    width: 55px;
    height: 55px;
    top: -5px;
    right: 25px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2),
                0 4px 20px rgba(255, 255, 255, 0.1);
  }
  
  &:nth-child(4) {
    width: 45px;
    height: 45px;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.2),
                0 4px 15px rgba(255, 255, 255, 0.1);
  }
`;

export const CloudsSection = () => {
  const cloudConfigs = [
    { size: '180px', opacity: 0.3, blur: '4px', floatDuration: '12s', floatHeight: '20px', scale: 0.9, delay: '0s' },
    { size: '220px', opacity: 0.5, blur: '2px', floatDuration: '10s', floatHeight: '25px', scale: 1.1, delay: '2s' },
    { size: '200px', opacity: 0.4, blur: '3px', floatDuration: '14s', floatHeight: '18px', scale: 1, delay: '4s' },
    { size: '240px', opacity: 0.6, blur: '1px', floatDuration: '11s', floatHeight: '22px', scale: 1.2, delay: '1s' },
    { size: '190px', opacity: 0.35, blur: '3.5px', floatDuration: '13s', floatHeight: '15px', scale: 0.95, delay: '3s' },
    { size: '210px', opacity: 0.45, blur: '2.5px', floatDuration: '9s', floatHeight: '20px', scale: 1.05, delay: '5s' },
  ];

  return (
    <CloudContainer>
      <CloudRow className="parallax-slow">
        {cloudConfigs.map((config, index) => (
          <Cloud 
            key={`slow-${index}`}
            className="cloud" 
            src={CloudImg} 
            alt="cloud"
            {...config}
            mobileSize="100px"
          />
        ))}
        {/* Duplicate for seamless loop */}
        {cloudConfigs.map((config, index) => (
          <Cloud 
            key={`slow-dup-${index}`}
            className="cloud" 
            src={CloudImg} 
            alt="cloud"
            {...config}
            mobileSize="100px"
          />
        ))}
      </CloudRow>
      
      <CloudRow className="parallax-medium" style={{ marginTop: '-50px' }}>
        {cloudConfigs.reverse().map((config, index) => (
          <Cloud 
            key={`medium-${index}`}
            className="cloud" 
            src={CloudImg} 
            alt="cloud"
            {...config}
            size={`${parseInt(config.size) * 0.8}px`}
            mobileSize="90px"
          />
        ))}
        {cloudConfigs.map((config, index) => (
          <Cloud 
            key={`medium-dup-${index}`}
            className="cloud" 
            src={CloudImg} 
            alt="cloud"
            {...config}
            size={`${parseInt(config.size) * 0.8}px`}
            mobileSize="90px"
          />
        ))}
      </CloudRow>
    </CloudContainer>
  );
};

export const CloudsSectionAlt = () => {
  const altCloudConfigs = [
    { size: '160px', opacity: 0.25, blur: '5px', floatDuration: '15s', floatHeight: '12px', scale: 0.85, delay: '0s' },
    { size: '200px', opacity: 0.4, blur: '3px', floatDuration: '12s', floatHeight: '18px', scale: 1, delay: '3s' },
    { size: '180px', opacity: 0.3, blur: '4px', floatDuration: '14s', floatHeight: '15px', scale: 0.9, delay: '1s' },
    { size: '220px', opacity: 0.5, blur: '2px', floatDuration: '10s', floatHeight: '20px', scale: 1.1, delay: '4s' },
  ];

  return (
    <CloudContainer style={{ marginTop: '80px' }}>
      <CloudRow className="parallax-fast">
        {altCloudConfigs.map((config, index) => (
          <Cloud 
            key={`alt-${index}`}
            className="cloud" 
            src={CloudImg} 
            alt="cloud"
            {...config}
            mobileSize="80px"
          />
        ))}
        {altCloudConfigs.map((config, index) => (
          <Cloud 
            key={`alt-dup-${index}`}
            className="cloud" 
            src={CloudImg} 
            alt="cloud"
            {...config}
            mobileSize="80px"
          />
        ))}
      </CloudRow>
      
      {/* Add some glassmorphic decorative elements */}
      <div style={{ position: 'absolute', top: '50px', right: '10%', zIndex: -1 }}>
        <GlassmorphicCloud>
          <CloudPuff />
          <CloudPuff />
          <CloudPuff />
          <CloudPuff />
        </GlassmorphicCloud>
      </div>
    </CloudContainer>
  );
};