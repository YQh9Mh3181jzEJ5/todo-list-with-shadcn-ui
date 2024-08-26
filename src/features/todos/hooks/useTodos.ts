import { useAtom } from "jotai";
import { TodosState } from "@/features/todos/types";
import { todosAtom } from "@/features/todos/store/atoms";
import { useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export function useTodos(): TodosState {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = useCallback(
    (text: string) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: uuidv4(), text, completed: false, createdAt: Date.now() },
      ]);
    },
    [setTodos]
  );

  const toggleTodo = useCallback(
    (id: string) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [setTodos]
  );

  const deleteTodo = useCallback(
    (id: string) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [setTodos]
  );

  const editTodo = useCallback(
    (id: string, newText: string) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    },
    [setTodos]
  );

  const { activeTodosCount, completedTodosCount } = useMemo(() => {
    const active = todos.filter((todo) => !todo.completed).length;
    const completed = todos.filter((todo) => todo.completed).length;
    return { activeTodosCount: active, completedTodosCount: completed };
  }, [todos]);

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
