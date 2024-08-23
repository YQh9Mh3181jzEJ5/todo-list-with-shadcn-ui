import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MountainIcon } from '@/components/icons/MountainIcon';
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

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-card shadow bg-slate-200">
      <a href="#" className="flex items-center gap-2">
        <MountainIcon className="w-6 h-6" />
        <span className="text-lg font-bold ">Todo App</span>
      </a>
      <div className="relative flex-1 max-w-md mx-4">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input type="search" placeholder="Search todos..." className="px-4 rounded-md" />
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
              <img
                src="./public/placeholder-user.jpg"
                width={32}
                height={32}
                alt="User Avatar"
                className="rounded-full"
                style={{ aspectRatio: '32/32', objectFit: 'cover' }}
              />
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
      </div>
    </header>
  );
};
