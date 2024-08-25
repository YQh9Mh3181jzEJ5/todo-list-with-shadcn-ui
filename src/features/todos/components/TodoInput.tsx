import React from "react";
import { Input } from "@/components/ui";
import { MAX_TODO_LENGTH } from "@/features/todos/constants";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useTodos } from "../hooks";

export function TodoInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { todos, addTodo } = useTodos();

  const validateInput = useCallback(
    (value: string) => {
      const trimmedValue = value.trim();
      if (!trimmedValue) {
        return "Todo cannot be empty";
      }
      if (trimmedValue.length > MAX_TODO_LENGTH) {
        return `Character limit exceeded: ${trimmedValue.length}/${MAX_TODO_LENGTH}. Please shorten your todo.`;
      }
      if (todos.some((todo) => todo.text === trimmedValue)) {
        return "This todo already exists";
      }
      return null;
    },
    [todos]
  );

  const handleAddTodo = () => {
    const trimmedValue = inputValue.trim();
    const validationError = validateInput(trimmedValue);

    if (validationError) {
      setError(validationError);
      return;
    }

    addTodo(trimmedValue);
    setInputValue("");
    setError(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTodo();
  };

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      setError(validateInput(newValue));
    },
    [validateInput]
  );

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative flex-grow">
        <Input
          type="text"
          placeholder="Add a new todo..."
          className="pl-4 pr-32 py-8 text-lg truncate"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={MAX_TODO_LENGTH}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-background">
          <p
            className={`text-sm ${
              inputValue.length > MAX_TODO_LENGTH
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {inputValue.length}/{MAX_TODO_LENGTH}
          </p>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleAddTodo}
            aria-label="Add todo"
            className="disabled:cursor-not-allowed"
          >
            <IoSend className="text-muted-foreground h-4 w-4" />
          </Button>
        </div>

        {error && (
          <p className="text-red-500 text-sm absolute left-2 bottom-0 transform translate-y-[calc(100%+0.5rem)]">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
