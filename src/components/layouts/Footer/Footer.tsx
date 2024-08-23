import { TodoInput } from '@/features/todos/components';

interface FooterProps {
  onAddTodo: (text: string) => void;
  todos: { text: string }[];
}

export const Footer = ({ onAddTodo, todos }: FooterProps) => {
  return (
    <footer className="bg-card shadow-sm ">
      <div className="container max-w-4xl pt-4 ">
        <TodoInput onAddTodo={onAddTodo} todos={todos} />
      </div>
      <div className="py-4">
        <p className="text-center text-xs font-light text-gray-400">
          &copy; 2024 my-portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
