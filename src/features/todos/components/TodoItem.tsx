import { TrashIcon } from '@/components/icons';
import { Button, Card, CardContent, Checkbox } from '@/components/ui';

export const TodoItem = (): JSX.Element => {
  return (
    <Card>
      <CardContent className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
        <Checkbox id="todo-1" defaultChecked />
        <label htmlFor="todo-1" className="text-lg font-medium">
          最初のTodoです。
        </label>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon"></Button>
          <Button variant="ghost" size="icon">
            <TrashIcon className="w-5 h-5" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
