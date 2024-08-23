import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-card shadow bg-slate-200">
      <div className="container mx-auto max-w-4xl">
        <form className="flex items-center h-24 py-4 gap-4">
          <Input type="text" placeholder="Add a new todo..." className="h-full te" />
          <Button type="submit" className="w-24 h-full">
            Add
          </Button>
        </form>
      </div>
    </footer>
  );
};
