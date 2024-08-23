import { TodoItem } from './TodoItem';

export const CompleteTodoList = (): JSX.Element => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Complete Todo List</h1>
      </div>
      <div className="space-y-4">
        <TodoItem />
      </div>
    </div>
  );
};
