import DarkMode from '../DarkMode';
import Input from '../Input';
import Load from '../Load';
import Logo from '../Logo';
import Options from '../Options';
import Player from '../Player';

export default function App() {
  return (
    <>
      <Load />
      <Logo />
      <Input />
      <Player />
      <Options />
      <DarkMode />
    </>
  );
}
