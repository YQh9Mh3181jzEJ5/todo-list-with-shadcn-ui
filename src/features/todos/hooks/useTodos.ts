import { useAtom } from "jotai";
import { TodosState } from "@/features/todos/types";
import { todosAtom } from "@/features/todos/store/atoms";
import { useCallback, useMemo } from "react";

export function useTodos(): TodosState {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = useCallback(
    (text: string) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text, completed: false, createdAt: Date.now() },
      ]);
    },
    [setTodos]
  );

  const toggleTodo = useCallback(
    (id: number) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [setTodos]
  );

  const deleteTodo = useCallback(
    (id: number) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [setTodos]
  );

  const editTodo = useCallback(
    (id: number, newText: string) => {
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
