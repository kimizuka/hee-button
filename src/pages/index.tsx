import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { useEffect, useRef, useState } from 'react';
import { say } from '@/scripts/say';
import { Question } from '@/components/Question';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;

  .ui {
    position: fixed;
    top: 8px; left: 8px;
  }

  .ui button {
    font-size: 32px;
  }

  .ui button + button {
    margin-left: 8px;
  }

  .btn-edit {
    position: fixed;
    top: 8px; right: 8px;
    font-size: 32px;
  }

  .edit-area {
    position: fixed;
    top: 24px; right: 24px;
    bottom: 24px;
    background: rgba(255, 255, 255, .4);
    overflow: scroll;
  }

  .texts {
    white-space: pre-wrap;
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

  [data-is-show='false'] {
    display: none;
  }

  [data-is-show='true'] {
    display: block;
  }
`;

export default function IndexPage() {
  const [ inputText, setInputText ] = useState(
`えきへでかける
おかしをたべる
わたしはげんき
わにをみる
きょうはいいてんきだ
わなげはたのしい
がっこうへいく
ごはんはおいしい
ピアノをひく
えんぴつけずりをもらう
うみがみえる
はがぬける
ポケモンはたのしい
バスでえんそくにでかける
でんきをけす
にわにはにわとりがいる
こんにちは`
  );
  const [ text, setText ] = useState('');
  const [ state, setState ] = useState<'ok' | 'ng' | ''>('');
  const [ isShowEdit, setIsShowEdit ] = useState(false);
  const textsRef = useRef<HTMLParagraphElement>(null);
  const currentindexRef = useRef(0);
  const timerRef = useRef(-1);

  useEffect(() => {
    setInputText(localStorage.getItem('texts') || inputText);
    handleClickBtnNext();
  }, []);

  useEffect(() => {
    if (state) {
      timerRef.current = window.setTimeout(() => setState(''), 1000);
    }
  }, [state]);

  function save(texts = '') {
    localStorage.setItem('texts', texts);
  }

  function handleClickBtnNext() {
    const texts = inputText.split(`\n`) || [];

    currentindexRef.current = (currentindexRef.current + 1) % texts.length;
    setText(texts[currentindexRef.current]);
    say(texts[currentindexRef.current]);
  }

  function handleClickBtnShuffle() {
    const texts = inputText.split(`\n`) || [];
    const lastIndex = currentindexRef.current;

    currentindexRef.current = 0 | (Math.random() * texts.length);

    if (lastIndex === currentindexRef.current) {
      currentindexRef.current = (currentindexRef.current + 1) % texts.length;
    }

    setText(texts[currentindexRef.current]);
    say(texts[currentindexRef.current]);
  }

  function handleClickBtnAudio() {
    say(text);
  }

  function handleOk() {
    setState('ok');
    say('ピンポーン', 1);
  }

  function handleNg() {
    setState('ng');
    say('ブッブー', 1);
  }

  return (
    <Wrapper data-state={ state }>
      <div className="ui">
        <button className="btn-skip" onClick={ handleClickBtnNext }>⏩</button>
        <button className="btn-shuffle" onClick={ handleClickBtnShuffle }>🔀</button>
        <button className="btn-audio" onClick={ handleClickBtnAudio }>💬</button>
      </div>
      <Question
        text={ text }
        onOk={ handleOk }
        onNg={ handleNg }
      />
      <button
        className="btn-edit"
        onClick={ () => setIsShowEdit(!isShowEdit) }>🖋</button>
      <div className="edit-area" data-is-show={ isShowEdit }>
        <TextareaAutosize
          className="texts"
          value={ inputText }
          onInput={(evt: any) => {
            setInputText(evt.target.value)
            save(evt.target.value);
          }}
        ></TextareaAutosize>
      </div>
    </Wrapper>
  );
}
