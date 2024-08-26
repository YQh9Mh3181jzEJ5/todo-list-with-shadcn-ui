import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui";

export const Header = () => (
  <header className="bg-card shadow">
    <div className="container flex items-center justify-between px-4 py-3">
      <Logo />
      <SearchBar />
      <nav className="flex items-center gap-4">
        <Link to="/contact" aria-label="お問い合わせ">
          <Button variant="ghost" size="icon">
            <MdEmail />
          </Button>
        </Link>
        <UserMenu />
      </nav>
    </div>
  </header>
);
