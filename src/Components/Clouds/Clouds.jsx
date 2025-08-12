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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    filter: blur(0px);
    opacity: 0.95;
    transform: translateY(-15px) scale(1.15);
    animation-play-state: paused;
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




export const CloudsSection = () => {
  const cloudConfigs = [
    { size: '180px', opacity: 0.3, blur: '4px', floatDuration: '12s', floatHeight: '20px', scale: 0.9, delay: '0s' },
    { size: '220px', opacity: 0.5, blur: '2px', floatDuration: '10s', floatHeight: '25px', scale: 1.1, delay: '2s' },
    { size: '200px', opacity: 0.4, blur: '3px', floatDuration: '14s', floatHeight: '18px', scale: 1, delay: '4s' },
    { size: '240px', opacity: 0.6, blur: '1px', floatDuration: '11s', floatHeight: '22px', scale: 1.2, delay: '1s' },
    { size: '190px', opacity: 0.35, blur: '3.5px', floatDuration: '13s', floatHeight: '15px', scale: 0.95, delay: '3s' },
    { size: '210px', opacity: 0.45, blur: '2.5px', floatDuration: '9s', floatHeight: '20px', scale: 1.05, delay: '5s' },
    { 
       size: '230px', opacity: 0.55, blur: '1.5px', floatDuration: '8s', floatHeight: '25px', scale: 1.15, delay: '6s' 
    },
     {
       size: '250px', opacity: 0.65, blur: '0.5px', floatDuration: '7s', floatHeight: '30px', scale: 1.25, delay: '7s'
     }, {
       size: '260px', opacity: 0.75, blur: '0.2px', floatDuration: '6s', floatHeight: '35px', scale: 1.35, delay: '8s'
     }, 
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
    { size: '170px', opacity: 0.35, blur: '3.5px', floatDuration: '13s', floatHeight: '16px', scale: 0.95, delay: '2s' },
    { size: '190px', opacity: 0.45, blur: '2.5px', floatDuration: '11s', floatHeight: '22px', scale: 1.05, delay: '5s' },
    { size: '210px', opacity: 0.55, blur: '1.8px', floatDuration: '9s', floatHeight: '25px', scale: 1.15, delay: '6s' },
    { size: '165px', opacity: 0.28, blur: '4.2px', floatDuration: '16s', floatHeight: '14px', scale: 0.88, delay: '7s' },
    { size: '195px', opacity: 0.42, blur: '3.2px', floatDuration: '10s', floatHeight: '19px', scale: 1.02, delay: '8s' },
    { size: '175px', opacity: 0.38, blur: '3.8px', floatDuration: '12s', floatHeight: '17px', scale: 0.92, delay: '9s' }
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
        {/* Duplicate for seamless loop */}
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
      
      <CloudRow className="parallax-medium" style={{ marginTop: '-40px' }}>
        {altCloudConfigs.reverse().map((config, index) => (
          <Cloud 
            key={`alt-medium-${index}`}
            className="cloud" 
            src={CloudImg} 
            alt="cloud"
            {...config}
            size={`${parseInt(config.size) * 0.75}px`}  /* Slightly smaller for second row */
            mobileSize="70px"
          />
        ))}
        {/* Duplicate for seamless loop */}
        {altCloudConfigs.map((config, index) => (
          <Cloud 
            key={`alt-medium-dup-${index}`}
            className="cloud" 
            src={CloudImg} 
            alt="cloud"
            {...config}
            size={`${parseInt(config.size) * 0.75}px`}
            mobileSize="70px"
          />
        ))}
      </CloudRow>

    </CloudContainer>
  );
};