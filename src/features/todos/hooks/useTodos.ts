import { useAtom } from "jotai";
import { todosAtom } from "../store/atoms/atoms";
import { Todo } from "../types";

export function useTodos(): {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  activeTodosCount: number;
  completedTodosCount: number;
} {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now().toString(), text, completed: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    activeTodosCount,
    completedTodosCount,
  };
}
