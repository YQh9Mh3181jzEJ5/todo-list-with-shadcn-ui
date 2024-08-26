import { useAtom } from "jotai";
import { TodosState } from "@/features/todos/types";
import { todosAtom } from "@/features/todos/store/atoms";

export function useTodos(): TodosState {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false, createdAt: Date.now() },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    activeTodosCount,
    completedTodosCount,
  };
}
