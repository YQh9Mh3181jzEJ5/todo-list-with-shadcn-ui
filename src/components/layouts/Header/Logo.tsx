import { FcTodoList } from "react-icons/fc";

export const Logo = () => (
  <a href="/" className="flex items-center gap-2">
    <FcTodoList className="w-6 h-6" />
    <span className="text-lg font-bold ">Todo App!</span>
  </a>
);
