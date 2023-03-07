import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Question } from '@/components/Question';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;

  > button {
    position: fixed;
    top: 8px; left: 8px;
  }

  &[data-state] {
    &:after {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0; bottom: 0;
      left: 0; right: 0;
      font-size: 240px;
    }
  }

  &[data-state='ok'] {
    &:after {
      content: '⭕️';
    }
  }

  &[data-state='ng'] {
    &:after {
      content: '❌';
    }
  }
`;

export default function IndexPage() {
  const [ text, setText ] = useState('');
  const [ state, setState ] = useState<'ok' | 'ng' | ''>('');
  const currentindexRef = useRef(0);
  const timerRef = useRef(-1);

  useEffect(() => {
    handleClickBtnQuestion();
  }, []);

  useEffect(() => {
    if (state) {
      timerRef.current = window.setTimeout(() => setState(''), 1000);
    }
  }, [state]);

  function handleClickBtnQuestion() {
    const texts = [
      'にわにはにわとりがいる',
      'えきへでかける',
      'おかしをたべる'
    ];

    currentindexRef.current = (currentindexRef.current + 1) % texts.length;
    console.log(currentindexRef.current);
    setText(texts[currentindexRef.current]);
  }

  function handleOk() {
    setState('ok');
    say('ピンポーン', 1);
  }

  function handleNg() {
    setState('ng');
    say('ブッブー', 1);
  }

  function say(text = '', rate = .8) {
    const uttr = new SpeechSynthesisUtterance();

    uttr.text = text;
    uttr.rate = rate;
    speechSynthesis.speak(uttr);
  }

  return (
    <Wrapper data-state={ state }>
      <button onClick={ handleClickBtnQuestion }>🔘</button>
      <Question
        text={ text }
        onAudio={ () => say(text) }
        onOk={ handleOk }
        onNg={ handleNg }
      />
    </Wrapper>
  );
}
