import styled, { css } from 'styled-components';

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  background-color: ${(props) => props.theme.bg.default};
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.05) 0%,
    transparent 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 40px;
    width: 1px;
    height: 100%;
    background-color: ${(props) => props.theme.accents.a7};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.accents.a7};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 100px 20px;
    &::before {
      left: 20px;
    }
  }
`;

export const SubTitle = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.text.accent};
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 200vw;
    height: 1px;
    background-color: ${(props) => props.theme.accents.a7};
    z-index: -1;
    opacity: 0.5;
  }

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background-color: ${(props) => props.theme.text.accent};
  }
`;

export const FormWrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
  max-width: 600px;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.accents.a7};
  padding: 1rem 0;
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  font-size: 2rem;
  color: ${(props) => props.theme.text.default};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.brand.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.accents.a6};
    opacity: 0.5;
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.theme.accents.a7};
  color: ${(props) => props.theme.text.default};
  padding: 1rem 2rem;
  margin-top: 2rem;
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.text.default};
    color: ${(props) => props.theme.bg.default};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const Metadata = styled.div`
  position: absolute;
  bottom: 60px;
  right: 40px;
  text-align: right;
  font-size: 10px;
  line-height: 1.8;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${(props) => props.theme.text.accent};
  font-family: ${(props) => props.theme.fontFamily.fontMono};

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: -20px;
    width: 100vw;
    height: 1px;
    background-color: ${(props) => props.theme.accents.a7};
    opacity: 0.3;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    bottom: 60px;
    right: 20px;
  }
`;
