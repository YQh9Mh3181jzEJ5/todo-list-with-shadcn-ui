import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <header className="bg-card shadow">
      <div className="container flex items-center justify-between px-4 py-3">
        <Logo />
        <SearchBar />
        <UserMenu />
      </div>
    </header>
  );
};
