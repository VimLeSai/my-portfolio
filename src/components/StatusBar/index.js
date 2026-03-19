import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledStatusBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.accents.a7};
  z-index: 1000;
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${(props) => props.theme.text.default};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 20px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StatusBar = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time
    ? time.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    : '--:--:--';

  return (
    <StyledStatusBar>
      <Section>
        <span>(X) [ SCROLL ]</span>
        <span>(+) 007 BAR - 015°C</span>
      </Section>
      <Section>
        <span>DEVCOVER / GENERATOR</span>
      </Section>
      <Section>
        <span>NYC / {formattedTime}</span>
      </Section>
    </StyledStatusBar>
  );
};

export default StatusBar;
