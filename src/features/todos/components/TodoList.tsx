import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, newText: string) => void;
}

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
}: TodoListProps) => (
  <div className="space-y-4">
    {todos.map((todo, index) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        index={index + 1}
        onToggle={() => onToggleTodo(todo.id)}
        onDelete={() => onDeleteTodo(todo.id)}
        onEdit={(newText: string) => onEditTodo(todo.id, newText)}
      />
    ))}
  </div>
);
