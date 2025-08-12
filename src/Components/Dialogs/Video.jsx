import React from "react";
import styled from "styled-components";
import GlassButton from '../shared/GlassButton/GlassButton';
import MacOSDialog from '../shared/MacOSDialog/MacOSDialog';




export default function Video({ name, video, handleClose, openVideo }) {
  const [isMaximized, setIsMaximized] = React.useState(false);
  
  if (!openVideo) return null;

  return (
    <MacOSDialog
      title={name}
      open={openVideo}
      onClose={handleClose}
      width="700px"
      id={`video-${name}`}
      onMaximizeChange={setIsMaximized}
      dockColor="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      actions={[
        {
          label: 'Close Video',
          onClick: handleClose,
          size: 'medium'
        }
      ]}>
      
      <iframe
        title={name}
        width="100%"
        className="movie-frame"
        height={isMaximized ? "50vh" : "400"}
        frameBorder="0"
        src={video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
      </iframe>
    </MacOSDialog>
  );
}
