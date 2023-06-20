import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="relative w-20 h-20 overflow-hidden rounded-full">
          <Image
            src="/static/profile.jpg"
            layout="fill"
            objectFit="contain"
            alt="Lee gangmin"
          />
        </div>
        <Image
          src={theme === 'light' ? '/static/icons/sun.svg' : '/static/icons/moon.png'}
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={handleThemeToggle}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
