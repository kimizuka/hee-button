import styled from 'styled-components';
import { Arrow } from '@/components/Arrow';
import { Button } from '@/components/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background: #fff;
  opacity: 1;
  transition: opacity .2s .2s ease-in-out;

  > .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;

    .arrow {
      position: absolute;
      top: 40px;
      z-index: 2;
    }

    > h1 {
      margin: 16px auto 0;
      font-size: 80px;
      font-weight: black;
    }

    > h2 {
      margin: 8px auto 0;
      text-align: center;
    }
  }

  &[data-is-show-splash='false'] {
    opacity: 0;
    pointer-events: none;
  }
`;

export function Splash({
  isShow,
  onClick
}: {
  isShow: boolean;
  onClick: () => void;
}) {
  return (
    <Wrapper
      data-is-show-splash={ isShow }
      onClick={ onClick }
    >
      <div className="box">
        <Arrow />
        <Button />
        <h1>へえボタン</h1>
        <h2>「へ」「え」、「は」「わ」、「を」「お」<br />ただしいほうをえらぼう。</h2>
      </div>
    </Wrapper>
  );
}
