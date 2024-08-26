import { TabsContent } from "@/components/ui/tabs";
import { TodoList } from "@/features/todos/components";
import { useTodos } from "../hooks";

export const TodoTabContent = () => {
  const { todos, toggleTodo, deleteTodo, editTodo } = useTodos();

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="my-4">
      <TabsContent value="Active">
        <TodoList
          todos={activeTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </TabsContent>
      <TabsContent value="Completed">
        <TodoList
          todos={completedTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </TabsContent>
    </div>
  );
};
