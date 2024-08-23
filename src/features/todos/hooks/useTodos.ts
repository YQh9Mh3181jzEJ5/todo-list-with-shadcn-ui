import { useAtom } from 'jotai';
import { todosAtom } from '../store/atoms/atoms';

export const useTodos = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now().toString(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};
