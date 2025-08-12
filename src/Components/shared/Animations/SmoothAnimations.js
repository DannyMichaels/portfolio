import { keyframes } from 'styled-components';

// Fade animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Scale animations
export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Slide animations
export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Rotation animations
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const wobble = keyframes`
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-25px) rotate(-5deg);
  }
  30% {
    transform: translateX(20px) rotate(3deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3deg);
  }
  60% {
    transform: translateX(10px) rotate(2deg);
  }
  75% {
    transform: translateX(-5px) rotate(-1deg);
  }
  100% {
    transform: translateX(0);
  }
`;

// Shimmer effect for loading states
export const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// Glow effect
export const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.8), 0 0 30px rgba(240, 147, 251, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
  }
`;

// Float animation
export const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Reveal animation for text
export const revealText = keyframes`
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

// Animation utilities
export const animationMixin = (animation, duration = '0.6s', delay = '0s', fillMode = 'both') => `
  animation: ${animation} ${duration} ${delay} ${fillMode};
`;

export const transitionMixin = (property = 'all', duration = '0.3s', easing = 'cubic-bezier(0.4, 0, 0.2, 1)') => `
  transition: ${property} ${duration} ${easing};
`;