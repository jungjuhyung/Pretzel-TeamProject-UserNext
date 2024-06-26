import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = css`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 4432px;
`

export const VideoContainer = styled.div`

  min-width: 100%;
  min-height: 300px;
  max-height: 300px;
`;

export const Video = styled.video`
  min-width: 100%;
  min-height: 300px;
  max-height: 300px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 645px;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease; 
  opacity: ${props => (props.isHovered ? 0 : 1)};
  pointer-events: none; 
`;