import { Todo } from ".";

export interface TodosState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  activeTodosCount: number;
  completedTodosCount: number;
}
