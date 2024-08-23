import { CheckedIcon, TrashIcon } from '@/components/icons';
import { Button, Card, CardContent } from '@/components/ui';
import { Todo } from '../types/todo';
interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  index: number;
}

export const TodoItem = ({ todo, onToggle, onDelete, index }: TodoItemProps): JSX.Element => {
  return (
    <Card className="hover:cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-50 dark:border-slate-600">
      <CardContent className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-2 p-4">
        <span className="flex items-center justify-center w-5 h-5 text-sm font-medium text-primary-foreground bg-primary rounded-full">
          {index}
        </span>
        <span className="text-lg">{todo.text}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          <CheckedIcon
            className={`w-5 h-5 ${todo.completed ? 'text-green-500' : 'text-gray-400'}`}
          />
        </Button>
        <Button variant="ghost" size="icon" onClick={onDelete} aria-label="Delete todo">
          <TrashIcon className="w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
};
