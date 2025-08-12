import React, { useState, useRef, useContext, createContext } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import GlassButton from '../GlassButton/GlassButton';

// Context for managing minimized windows
const DockContext = createContext();

export const DockProvider = ({ children }) => {
  const [minimizedWindows, setMinimizedWindows] = useState([]);

  const addMinimizedWindow = (window) => {
    setMinimizedWindows(prev => {
      // Check if window already exists in dock
      const exists = prev.find(w => w.id === window.id);
      if (exists) {
        return prev; // Don't add duplicates
      }
      return [...prev, window];
    });
  };

  const removeMinimizedWindow = (id) => {
    setMinimizedWindows(prev => prev.filter(w => w.id !== id));
  };

  const restoreWindow = (id) => {
    const window = minimizedWindows.find(w => w.id === id);
    if (window && window.onRestore) {
      window.onRestore();
      // Don't remove from dock here - let the component handle it
    }
  };

  const isMinimized = (id) => {
    return minimizedWindows.some(w => w.id === id);
  };

  return (
    <DockContext.Provider value={{
      minimizedWindows,
      addMinimizedWindow,
      removeMinimizedWindow,
      restoreWindow,
      isMinimized
    }}>
      {children}
      <MacDock />
    </DockContext.Provider>
  );
};

// macOS Window Controls Component
const MacOSControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 10;
`;

const MacOSButton = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  &.close {
    background: #ff5f57;
    
    &:hover {
      background: #ff3b30;
      
      &::after {
        content: '×';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
  
  &.minimize {
    background: #ffbd2e;
    
    &:hover {
      background: #ffaa00;
      
      &::after {
        content: '−';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
  
  &.maximize {
    background: #28ca42;
    
    &:hover {
      background: #20a034;
      
      &::after {
        content: '⤢';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(0, 0, 0, 0.7);
        font-size: 10px;
        font-weight: bold;
      }
    }
  }
`;

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.12) 0%, 
      rgba(255, 255, 255, 0.08) 100%) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 2px solid rgba(255, 255, 255, 0.6) !important;
    border-radius: 16px !important;
    box-shadow: 0 20px 40px rgba(31, 38, 135, 0.3),
                0 10px 20px rgba(31, 38, 135, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    overflow: hidden;
    margin: 32px !important;
  }
  
  .MuiBackdrop-root {
    background: rgba(0, 0, 0, 0.7) !important;
    backdrop-filter: blur(8px) !important;
  }
`;

const dialogStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
    paddingLeft: 60, // Space for macOS controls
    position: 'relative',
    cursor: 'move', // Indicates draggable
  },
  title: {
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: 600,
    fontSize: '1.1rem',
    textAlign: 'center',
  }
});

// Enhanced Dialog Title with macOS controls
const DialogTitle = withStyles(dialogStyles)((props) => {
  const { children, classes, onClose, onMinimize, onMaximize, onMouseDown, isMinimized, isMaximized, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} onMouseDown={onMouseDown} {...other}>
      <MacOSControls>
        <MacOSButton 
          className="close" 
          onClick={onClose}
          title="Close"
        />
        <MacOSButton 
          className="minimize" 
          onClick={onMinimize}
          title={isMinimized ? "Restore" : "Minimize"}
        />
        <MacOSButton 
          className="maximize" 
          onClick={onMaximize}
          title={isMaximized ? "Restore" : "Maximize"}
        />
      </MacOSControls>
      <Typography className={classes.title}>{children}</Typography>
    </MuiDialogTitle>
  );
});

// Main MacOS Dialog Component
export default function MacOSDialog({ 
  children, 
  title, 
  open, 
  onClose, 
  width = '650px',
  height = 'auto',
  maxWidth = '90vw',
  maxHeight = '85vh',
  id,
  onMaximizeChange,
  actions = [],
  dockIcon,
  dockColor,
  ...props 
}) {
  const dockContext = useContext(DockContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const dialogRef = useRef(null);

  const handleMouseDown = (e) => {
    if (isMinimized) return; // Don't drag when minimized
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMaximize = () => {
    const newMaximizedState = !isMaximized;
    setIsMaximized(newMaximizedState);
    if (newMaximizedState) {
      setPosition({ x: 0, y: 0 }); // Center when maximizing
    }
    // Notify parent component of maximize state change
    if (onMaximizeChange) {
      onMaximizeChange(newMaximizedState);
    }
  };

  const handleMinimize = () => {
    if (!isMinimized && dockContext) {
      // Add genie effect before minimizing
      const dialogElement = dialogRef.current;
      if (dialogElement) {
        // Calculate dock position
        const dockX = window.innerWidth / 2;
        const dockY = window.innerHeight - 60;
        const currentRect = dialogElement.getBoundingClientRect();
        const centerX = currentRect.left + currentRect.width / 2;
        const centerY = currentRect.top + currentRect.height / 2;
        
        // Calculate translation to dock
        const translateX = dockX - centerX;
        const translateY = dockY - centerY;
        
        dialogElement.style.transition = 'transform 0.6s cubic-bezier(0.32, 0, 0.67, 0), opacity 0.6s ease';
        dialogElement.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.05)`;
        dialogElement.style.opacity = '0';
        
        setTimeout(() => {
          setIsMinimized(true);
          // Add to dock with icon and color
          dockContext.addMinimizedWindow({
            id: id || title,
            title,
            icon: dockIcon,
            color: dockColor,
            onRestore: () => {
              setIsMinimized(false);
              // Remove from dock after restoring
              dockContext.removeMinimizedWindow(id || title);
              // Reset transform when restoring
              setTimeout(() => {
                const el = dialogRef.current;
                if (el) {
                  el.style.transition = 'transform 0.4s cubic-bezier(0.32, 0, 0.67, 0), opacity 0.4s ease';
                  el.style.transform = `translate(${position.x}px, ${position.y}px) scale(1)`;
                  el.style.opacity = '1';
                }
              }, 50);
            }
          });
        }, 600);
      }
    } else if (!isMinimized) {
      // Already not minimized, do nothing
      return;
    }
  };

  // Add event listeners when dragging
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  // Reset position when dialog opens
  React.useEffect(() => {
    if (open) {
      setPosition({ x: 0, y: 0 });
      setIsMaximized(false);
      setIsMinimized(false);
      if (dockContext) {
        dockContext.removeMinimizedWindow(id || title);
      }
    }
  }, [open]);

  return (
    <StyledDialog
      onClose={onClose}
      open={open && !isMinimized} // Hide dialog (including backdrop) when minimized
      PaperProps={{
        ref: dialogRef,
        style: {
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isDragging ? 'none' : 'transform 0.2s ease',
          width: isMaximized ? '85vw' : width,
          height: isMaximized ? '75vh' : height,
          maxWidth: isMaximized ? '85vw' : maxWidth,
          maxHeight: isMaximized ? '75vh' : maxHeight,
          top: isMaximized ? '80px' : 'auto', // Keep space from nav
        }
      }}
      {...props}>
      <DialogTitle
        onClose={onClose}
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
        onMouseDown={handleMouseDown}
        isMinimized={isMinimized}
        isMaximized={isMaximized}>
        {title}
      </DialogTitle>
      
      {!isMinimized && (
        <>
          <StyledDialogContent>
            {children}
          </StyledDialogContent>
          
          {actions.length > 0 && (
            <StyledDialogActions>
              {actions.map((action, index) => (
                <GlassButton
                  key={index}
                  onClick={action.onClick}
                  variant={action.variant || 'default'}
                  size={action.size || 'medium'}>
                  {action.label}
                </GlassButton>
              ))}
            </StyledDialogActions>
          )}
        </>
      )}
    </StyledDialog>
  );
}

const StyledDialogContent = styled.div`
  padding: 0 24px 24px 24px;
  color: rgba(255, 255, 255, 0.9);
`;

const StyledDialogActions = styled.div`
  padding: 16px 24px 24px 24px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

// Helper function to get default colors for dock items
const getDefaultColor = (index) => {
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  ];
  return colors[index % colors.length];
};

// macOS Dock Component
const MacDock = () => {
  const dockContext = useContext(DockContext);
  
  if (!dockContext || dockContext.minimizedWindows.length === 0) {
    return null;
  }

  return (
    <DockContainer>
      <DockWrapper>
        {dockContext.minimizedWindows.map((window, index) => (
          <DockItem
            key={window.id}
            onClick={() => dockContext.restoreWindow(window.id)}
            title={`Restore ${window.title}`}>
            <DockIcon 
              color={window.color || getDefaultColor(index)}
              hasImage={!!window.icon}>
              {window.icon && (
                <img src={window.icon} alt={window.title} />
              )}
            </DockIcon>
            <DockLabel>{window.title}</DockLabel>
          </DockItem>
        ))}
      </DockWrapper>
    </DockContainer>
  );
};

const DockContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
  
  /* Ensure it stays away from navigation */
  @media screen and (max-width: 768px) {
    bottom: 40px;
  }
`;

const DockWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.15) 0%, 
    rgba(255, 255, 255, 0.1) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  
  /* Genie effect animation */
  animation: genieAppear 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  @keyframes genieAppear {
    0% {
      transform: scale(0.3) translateY(100px);
      opacity: 0;
    }
    50% {
      transform: scale(1.1) translateY(-10px);
    }
    100% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }
`;

const DockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  padding: 4px;
  border-radius: 8px;
  
  &:hover {
    transform: translateY(-4px) scale(1.1);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const DockIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${props => props.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: ${props => props.hasImage ? '10px' : '12px'};
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Add a subtle reflection effect */
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    height: 40%;
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.3) 0%, 
      transparent 100%);
    border-radius: 6px 6px 0 0;
    pointer-events: none;
  }
`;

const DockLabel = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 2px;
  max-width: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
`;