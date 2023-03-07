export function say(text = '', rate = .8) {
  const uttr = new SpeechSynthesisUtterance();

  uttr.text = text;
  uttr.rate = rate;
  speechSynthesis.speak(uttr);
}