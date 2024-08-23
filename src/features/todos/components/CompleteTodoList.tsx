import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';
interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}
export const CompleteTodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps): JSX.Element => {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};
