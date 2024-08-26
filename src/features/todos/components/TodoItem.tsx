import { CheckedIcon, TrashIcon } from "@/components/icons";
import { Button, Card, CardContent, Input } from "@/components/ui";
import { Todo } from "../types/todo";
import { FaEdit, FaSave } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";
import { formatDate } from "@/lib";
interface TodoItemProps {
  todo: Todo;
  index: number;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

interface IconButtonProps {
  onClick: () => void;
  ariaLabel: string;
  icon: React.ReactNode;
}

const iconBaseStyle = "w-5 h-5";

const IconButton = ({ onClick, ariaLabel, icon }: IconButtonProps) => (
  <Button onClick={onClick} aria-label={ariaLabel}>
    {icon}
  </Button>
);

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

  const handleEdit = useCallback((): void => {
    setIsEditing(true);
  }, []);

  const handleSave = useCallback((): void => {
    onEdit(editText);
    setIsEditing(false);
  }, [onEdit, editText]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
        handleSave();
      }
    },
    [handleSave]
  );
  return (
    <Card className="hover:cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-50 dark:border-slate-600">
      <CardContent className="flex items-center justify-between p-4 gap-2">
        <div className="flex items-center justify-between gap-2 w-full">
          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 text-sm font-medium text-primary-foreground bg-primary rounded-full">
            {index}
          </span>
          <div className="flex flex-col w-full">
            <div className="flex w-full gap-2">
              {isEditing ? (
                <Input
                  ref={inputRef}
                  value={editText}
                  onChange={(event) => setEditText(event.target.value)}
                  className="w-full text-lg"
                  onKeyDown={handleKeyDown}
                />
              ) : (
                <span className="text-lg flex-grow">{todo.text}</span>
              )}
              <div className="flex items-center gap-2">
                <IconButton
                  onClick={isEditing ? handleSave : handleEdit}
                  ariaLabel={isEditing ? "Save todo" : "Edit todo"}
                  icon={
                    isEditing ? (
                      <FaSave className={`${iconBaseStyle}`} />
                    ) : (
                      <FaEdit className={`${iconBaseStyle}`} />
                    )
                  }
                />
                <IconButton
                  onClick={onToggle}
                  ariaLabel={
                    todo.completed ? "Mark as incomplete" : "Mark as complete"
                  }
                  icon={
                    <CheckedIcon
                      className={`${iconBaseStyle} ${todo.completed ? "text-green-500" : "text-gray-400"}`}
                    />
                  }
                />
                <IconButton
                  onClick={onDelete}
                  ariaLabel="Delete todo"
                  icon={<TrashIcon className={iconBaseStyle} />}
                />
              </div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(todo.createdAt)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
