import { Input } from '@/components/ui';
import { MAX_TODO_LENGTH } from '@/constants';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
  todos: { text: string }[];
}

export const TodoInput = ({ onAddTodo, todos }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleAddTodo = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setError('Todo cannot be empty');
      return;
    }

    if (trimmedValue.length > MAX_TODO_LENGTH) {
      setError(`Todo must be ${MAX_TODO_LENGTH} characters or less`);
      return;
    }

    if (todos.some((todo) => todo.text === trimmedValue)) {
      setError('This todo already exists');
      return;
    }

    onAddTodo(trimmedValue);
    setInputValue('');
    setError(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAddTodo();
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex-grow">
      <Input
        type="text"
        placeholder="Add a new todo..."
        className="pl-4 pr-16 py-8 text-lg"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          setError(null);
        }}
        maxLength={MAX_TODO_LENGTH}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-8 top-1/2 -translate-y-1/2"
        onClick={handleAddTodo}
        aria-label="Add todo"
      >
        <IoSend className=" text-muted-foreground h-4 w-4" />{' '}
      </Button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};
