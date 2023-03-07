import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;

  > * {
    margin: 4px;
  }

  .audio {
    + * {
      margin-left: 32px;
    }
  }

  button {
    display: block;
    margin: 4px;
    font-size: 32px;
  }
`;

export function Question({
  text,
  onAudio,
  onOk,
  onNg
}: {
  text: string;
  onAudio: () => void;
  onOk: () => void;
  onNg: () => void;
}) {
  function handleClickBtnOk() {
    console.log('⭕️');
    onOk();
  }

  function handleClickBtnNg() {
    console.log('❌');
    onNg();
  }

  return (
    <Wrapper>
      <button className="audio" onClick={ onAudio }>💬</button>
      {[...text].map((text, i) => {
        switch (text) {
          case 'へ':
            return (
              <p key={ i }>
                <button onClick={ handleClickBtnNg }>え</button>
                <button onClick={ handleClickBtnOk }>へ</button>
              </p>
            );
          case 'え':
            return (
              <p key={ i }>
                <button onClick={ handleClickBtnOk }>え</button>
                <button onClick={ handleClickBtnNg }>へ</button>
              </p>
            );
          case 'わ':
            return (
              <p key={ i }>
                <button onClick={ handleClickBtnNg }>は</button>
                <button onClick={ handleClickBtnOk }>わ</button>
              </p>
            );
          case 'は':
            return (
              <p key={ i }>
                <button onClick={ handleClickBtnOk }>は</button>
                <button onClick={ handleClickBtnNg }>わ</button>
              </p>
            );
          case 'を':
            return (
              <p key={ i }>
                <button onClick={ handleClickBtnNg }>お</button>
                <button onClick={ handleClickBtnOk }>を</button>
              </p>
            );
          case 'お':
            return (
              <p key={ i }>
                <button onClick={ handleClickBtnOk }>お</button>
                <button onClick={ handleClickBtnNg }>を</button>
              </p>
            );
        }

        return (
          <p key={ i }>{ text }</p>
        );
      })}
    </Wrapper>
  );
}
