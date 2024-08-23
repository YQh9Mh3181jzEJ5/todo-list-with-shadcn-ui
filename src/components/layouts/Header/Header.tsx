import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BellIcon } from '@/components/icons/BellIcon';
import { SettingsIcon } from '@/components/icons/SettingsIcon';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { VscAccount } from 'react-icons/vsc';
import { FcTodoList } from 'react-icons/fc';
import { FaSearch } from 'react-icons/fa';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const Header = () => {
  const { setTheme } = useTheme();

  return (
    <header className="bg-card shadow">
      <div className="container flex items-center justify-between px-4 py-3 ">
        <a href="/" className="flex items-center gap-2">
          <FcTodoList className="w-6 h-6" />
          <span className="text-lg font-bold ">Todo App</span>
        </a>
        <div className="relative flex-1 max-w-md mx-4">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
          <Input type="search" placeholder="Search todos..." className="pl-10 pr-4 rounded-md" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <SettingsIcon className="w-5 h-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon">
            <BellIcon className="w-5 h-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <VscAccount />
                <span className="sr-only">User Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
