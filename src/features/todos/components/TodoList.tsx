import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
}

export const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
}: TodoListProps) => (
  <div className="space-y-4">
    {todos.map((todo, index) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        index={index + 1}
        toggleTodo={() => toggleTodo(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
        editTodo={(newText: string) => editTodo(todo.id, newText)}
      />
    ))}
  </div>
);
