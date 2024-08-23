import { Header, Footer } from '@/components/layouts';
import { TodoTabs } from '@/features/todos/components';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center">
        <div className="container max-w-4xl">
          <TodoTabs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
