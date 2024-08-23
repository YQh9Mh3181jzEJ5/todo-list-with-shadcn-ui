import { TodoItem } from './TodoItem';

export const ActiveTodoList = (): JSX.Element => {
  return (
    <div className="space-y-4">
      <TodoItem />
      <TodoItem />
    </div>
  );
};
