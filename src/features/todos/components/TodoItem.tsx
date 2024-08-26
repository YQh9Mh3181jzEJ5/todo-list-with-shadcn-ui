import { CheckedIcon, TrashIcon } from "@/components/icons";
import { Button, Card, CardContent, Input } from "@/components/ui";
import { Todo } from "../types/todo";
import { FaEdit, FaSave } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
interface TodoItemProps {
  todo: Todo;
  index: number;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

export function TodoItem({
  todo,
  index,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect((): void => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = (): void => {
    setIsEditing(true);
  };

  const handleSave = (): void => {
    onEdit(editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSave();
    }
  };
  return (
    <Card className="hover:cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-50 dark:border-slate-600">
      <CardContent className="flex items-center justify-between p-4 gap-2">
        <div className="flex items-center gap-2 w-full">
          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 text-sm font-medium text-primary-foreground bg-primary rounded-full">
            {index}
          </span>
          {isEditing ? (
            <Input
              ref={inputRef}
              value={editText}
              onChange={(event) => setEditText(event.target.value)}
              className="w-full"
              onKeyDown={handleKeyDown}
            />
          ) : (
            <span className="text-lg flex-grow">{todo.text}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <Button onClick={handleSave}>
              <FaSave className="w-5 h-5" />
            </Button>
          ) : (
            <Button onClick={handleEdit}>
              <FaEdit className="w-5 h-5" />
            </Button>
          )}
          <Button
            onClick={onToggle}
            aria-label={
              todo.completed ? "Mark as incomplete" : "Mark as complete"
            }
          >
            <CheckedIcon
              className={`w-5 h-5 ${todo.completed ? "text-green-500" : "text-gray-400"}`}
            />
          </Button>
          <Button onClick={onDelete} aria-label="Delete todo">
            <TrashIcon className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
