import { TodoInput } from '@/features/todos/components';
import { Copyright } from './Copyright';

export const Footer = () => {
  return (
    <footer className="bg-card shadow-sm">
      <div className="container max-w-4xl py-4">
        <TodoInput />
      </div>
      <div className="py-4">
        <Copyright />
      </div>
    </footer>
  );
};
