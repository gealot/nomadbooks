'use client';
import { useTheme } from 'next-themes';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <button
      className="mx-4 text-xl transition-all hover:text-yellow-400"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
    </button>
  );
};

export default ThemeButton;
