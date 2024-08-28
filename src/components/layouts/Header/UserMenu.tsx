import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { auth, provider } from "@/lib";
import { signInWithPopup } from "firebase/auth";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { VscAccount } from "react-icons/vsc";
import { useAuthState } from "react-firebase-hooks/auth";

const signInWithGoogle = (): void => {
  signInWithPopup(auth, provider);
};

const signOutWithGoogle = (): void => {
  auth.signOut();
};

const userInfo = (
  <div>
    {auth.currentUser?.photoURL && (
      <img
        src={auth.currentUser.photoURL}
        alt="user"
        className="w-8 h-8 rounded-full"
      />
    )}
  </div>
);

export const UserMenu = () => {
  const { setTheme } = useTheme();
  const [user] = useAuthState(auth);
  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            {user ? userInfo : <VscAccount />}
            <span className="sr-only">User Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            {user ? auth.currentUser?.displayName : "My Account"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {user ? (
            <DropdownMenuItem onClick={signOutWithGoogle}>
              Logout
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={signInWithGoogle}>
              Login
            </DropdownMenuItem>
          )}
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
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
