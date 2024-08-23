import { TodoTabList, TodoTabContent } from '@/features/todos/components';
import { Tabs } from '@/components/ui/tabs';
import { Todo } from '../types/todo';

interface TodoTabsProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoTabs = ({ todos, onToggleTodo, deleteTodo }: TodoTabsProps) => {
  return (
    <Tabs defaultValue="Active">
      <TodoTabList />
      <TodoTabContent todos={todos} onToggleTodo={onToggleTodo} onDeleteTodo={deleteTodo} />
    </Tabs>
  );
};
