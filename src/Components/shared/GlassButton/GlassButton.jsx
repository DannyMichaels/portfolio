import React from 'react';
import styled from 'styled-components';

const StyledGlassButton = styled.button`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.15) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: ${props => props.size === 'large' ? '14px 28px' : props.size === 'small' ? '8px 16px' : '12px 20px'};
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: ${props => props.size === 'large' ? '15px' : props.size === 'small' ? '12px' : '13px'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  user-select: none;
  outline: none;
  
  /* Hover shimmer effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.1) 100%);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(31, 38, 135, 0.3),
                0 4px 12px rgba(255, 255, 255, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(31, 38, 135, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  /* Icon styling */
  svg {
    transition: transform 0.2s ease;
    width: ${props => props.size === 'large' ? '18px' : props.size === 'small' ? '14px' : '16px'};
    height: ${props => props.size === 'large' ? '18px' : props.size === 'small' ? '14px' : '16px'};
  }
  
  &:hover svg {
    transform: ${props => props.iconHover || 'scale(1.1)'};
  }
  
  /* Variant styles */
  ${props => props.variant === 'primary' && `
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 0.2) 0%, 
      rgba(118, 75, 162, 0.2) 100%);
    border-color: rgba(102, 126, 234, 0.4);
    
    &:hover {
      background: linear-gradient(135deg, 
        rgba(102, 126, 234, 0.3) 0%, 
        rgba(118, 75, 162, 0.3) 100%);
      border-color: rgba(102, 126, 234, 0.6);
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.08) 0%, 
      rgba(255, 255, 255, 0.03) 100%);
    border-color: rgba(255, 255, 255, 0.15);
    
    &:hover {
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.15) 0%, 
        rgba(255, 255, 255, 0.08) 100%);
      border-color: rgba(255, 255, 255, 0.3);
    }
  `}
  
  ${props => props.variant === 'highlight' && `
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.15) 100%);
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #fff;
    font-weight: 600;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.35) 0%, 
        rgba(255, 255, 255, 0.25) 100%);
      border-color: rgba(255, 255, 255, 0.6);
      color: rgba(0, 0, 0, 1);
      box-shadow: 0 8px 30px rgba(255, 255, 255, 0.2),
                  0 4px 15px rgba(31, 38, 135, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }
    
    &::before {
      background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.4), 
        transparent);
    }
  `}
`;

const GlassButton = ({ 
  children, 
  onClick, 
  disabled, 
  size = 'medium', // 'small', 'medium', 'large'
  variant = 'default', // 'default', 'primary', 'secondary'
  iconHover,
  type = 'button',
  className,
  ...props 
}) => {
  return (
    <StyledGlassButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      variant={variant}
      iconHover={iconHover}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </StyledGlassButton>
  );
};

export default GlassButton;