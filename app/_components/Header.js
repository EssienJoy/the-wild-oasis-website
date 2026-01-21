import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <header className='border-b border-primary-900 px-4 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <HamburgerMenu />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
