import { Header, Footer } from '@/components/layouts';
import { CompleteTodoList, IncompleteTodoList } from '@/features/todos/components';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <IncompleteTodoList />
        <CompleteTodoList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
