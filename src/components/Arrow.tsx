import styled, { keyframes } from 'styled-components';

const push = keyframes`
  0% {
    top: 0px;
  }

  100% {
    top: 24px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  animation: ${ push } 1.6s ease-in-out infinite alternate;

  &:before {
    display: block;
    margin: auto;
    font-size: 160px;
    content: '👇';
    filter: drop-shadow(4px 0 0 black)
            drop-shadow(-4px 0 0 black)
            drop-shadow(0 4px 0 black)
            drop-shadow(0 -4px 0 black)
            drop-shadow(12px 0 0 black)
            drop-shadow(-12px 0 0 black)
            drop-shadow(0 12px 0 black)
            drop-shadow(0 -12px 0 black);
  }
`;

export function Arrow() {
  return (
    <Wrapper className="arrow" />
  );
}
