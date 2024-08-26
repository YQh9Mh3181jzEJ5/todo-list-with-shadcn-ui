import { Todo } from ".";

export interface TodosState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  activeTodosCount: number;
  completedTodosCount: number;
}
