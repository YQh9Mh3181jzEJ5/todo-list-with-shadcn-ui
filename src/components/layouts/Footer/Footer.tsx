import { Button } from '@/components/ui';
import { TodoInput } from '@/features/todos/components';

export const Footer = () => {
  return (
    <footer className="bg-card shadow">
      <div className="container max-w-4xl mx-auto py-4">
        <form className="flex items-center gap-4">
          <TodoInput />
          <Button type="submit">Add Todo</Button>
        </form>
      </div>
    </footer>
  );
};
