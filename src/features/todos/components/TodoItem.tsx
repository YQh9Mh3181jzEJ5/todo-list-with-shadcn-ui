import { CheckedIcon, TrashIcon } from '@/components/icons';
import { Button, Card, CardContent, Checkbox } from '@/components/ui';
import { Todo } from '../types/todo';
interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps): JSX.Element => {
  return (
    <Card>
      <CardContent
        className="grid grid-cols-[1fr_auto_auto] items-center gap-2
       p-4"
      >
        <span className="text-lg font-medium">{todo.text}</span>
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
