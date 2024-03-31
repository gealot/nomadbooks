import Link from 'next/link';
import ThemeButton from '../common/ThemeButton';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center bg-gradient-to-b from-gra-start to-gra-end p-0 text-[rgb(var(--foreground-rgb))] backdrop-blur-xl sm:p-4 dark:text-[rgb(var(--foreground-rgb))]">
      <nav className="gnb dark:bg-[var(--background-rgb)]/60 bg-[var(--background-rgb)]/60 z-50 m-auto flex w-full max-w-[60rem] items-center justify-between rounded-none border-b border-gray-300/50 p-3 sm:rounded-full sm:border sm:shadow-[0_0_0.5rem_rgba(241,245,249,0.5)] dark:border-gray-400/10 sm:dark:shadow-[0_0_0.5rem_rgba(0,0,0,0.2)]">
        <Link
          prefetch={true}
          href="/"
          className="ml-2 flex items-center text-lg font-semibold transition-all hover:scale-110 hover:text-indigo-500"
        >
          NomadBooks
        </Link>
        <div className="flex items-center">
          <Link
            prefetch={true}
            href="/"
            className="mr-4 transition-all hover:text-indigo-700 hover:underline hover:decoration-sky-500 hover:decoration-2"
          >
            Best Sellers
          </Link>
          <Link
            prefetch={true}
            href="/about"
            className="transition-all hover:text-indigo-700 hover:underline hover:decoration-sky-500 hover:decoration-2"
          >
            About Us
          </Link>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
