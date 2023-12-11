import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 400px; height: 324px;

  > .top {
    position: relative;
    left: 40px;
    z-index: 1;
    cursor: pointer;

    .top-top {
      display: block;
      position: relative;
      top: 0;
      border-radius: 50%;
      border: solid 24px #000;
      width: 320px; height: 180px;
      background: #E53935;
      z-index: 1;
      transition: all .2s ease-in-out;
      
      &:before {
        display: block;
        position: absolute;
        left: -24px; top: 50%;
        width: 24px; height: 48px;
        content: '';
        background: #000;
        transition: height .2s ease-in-out;
      }

      &:after {
        display: block;
        position: absolute;
        right: -24px; top: 50%;
        width: 24px; height: 48px;
        content: '';
        background: #000;
        transition: height .2s ease-in-out;
      }
    }

    .top-bottom {
      display: block;
      position: absolute;
      top: 52px;
      border-radius: 50%;
      border: solid 24px #000;
      width: 320px; height: 180px;
      background: #D32F2F;
    }

    &:hover {
      .top-top {
        top: 52px;
        
        &:before {
          height: 0;
        }
        
        &:after {
          height: 0;
        }
      }
    }
  }

  > .bottom {
    position: absolute;
    top: 48px;
    z-index: 0;

    .bottom-top {
      display: block;
      position: relative;
      border-radius: 50%;
      border: solid 24px #000;
      width: 400px; height: 225px;
      background: #FDD835;
      z-index: 1;
      
      &:before {
        display: block;
        position: absolute;
        left: -24px; top: 50%;
        width: 24px; height: 52px;
        content: '';
        background: #000;
      }
      
      &:after {
        display: block;
        position: absolute;
        right: -24px; top: 50%;
        width: 24px; height: 52px;
        content: '';
        background: #000;
      }
    }

    .bottom-bottom {
      display: block;
      position: absolute;
      top: 52px;
      border-radius: 50%;
      border: solid 24px #000;
      width: 400px; height: 225px;
      background: #FBC02D;
    }
  }
`;

export function Button({
  onClick
}: {
  onClick?: () => void;
}) {
  return (
    <Wrapper className="button">
      <div
        className="top"
        onClick={ onClick }
      >
        <div className="top-top" />
        <div className="top-bottom" />
      </div> 
      <div className="bottom">
        <div className="bottom-top" />
        <div className="bottom-bottom" />
      </div> 
    </Wrapper>
  );
}
