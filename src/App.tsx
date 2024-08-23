import { Header, Footer } from '@/components/layouts';
import { TodoTabs } from '@/features/todos/components';
import { useTodos } from './features/todos/hooks';

const App = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center">
        <div className="container max-w-4xl">
          <TodoTabs todos={todos} onToggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      </main>
      <Footer onAddTodo={addTodo} todos={todos} />
    </div>
  );
};

export default App;
