import { TabsContent } from '@/components/ui/tabs';
import { CompleteTodoList, ActiveTodoList } from '@/features/todos/components';
import { Todo } from '../types/todo';

interface TodoTabContentProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoTabContent = ({ todos, onToggleTodo, onDeleteTodo }: TodoTabContentProps) => {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="my-4">
      <TabsContent value="Active">
        <ActiveTodoList
          todos={activeTodos}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      </TabsContent>
      <TabsContent value="Completed">
        <CompleteTodoList
          todos={completedTodos}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      </TabsContent>
    </div>
  );
};
