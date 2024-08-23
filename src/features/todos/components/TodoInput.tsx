import { Input } from '@/components/ui';
import { FaPlus } from 'react-icons/fa';

export const TodoInput = () => {
  return (
    <div className="relative flex-grow">
      <FaPlus className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Add a new todo..."
        className="pl-10 pr-4 py-8
       text-lg"
      />
    </div>
  );
};
