import { TodoInput } from "@/features/todos/components/TodoInput";
import { Copyright } from "./Copyright";

export const Footer = () => (
  <footer className="bg-card shadow-sm">
    <div className="container max-w-4xl py-4">
      <TodoInput />
    </div>
    <div className="py-4">
      <Copyright />
    </div>
  </footer>
);
