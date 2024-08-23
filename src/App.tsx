import { Header, Footer } from '@/components/layouts';
import { CompleteTodoList, ActiveTodoList } from '@/features/todos/components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center">
        <div className="w-full max-w-3xl">
          <Tabs defaultValue="Active">
            <div className="my-4">
              <TabsList className="inline-flex w-full h-16">
                <TabsTrigger value="Active" className="flex-1 h-full text-lg">
                  Active
                </TabsTrigger>
                <TabsTrigger value="Completed" className="flex-1 h-full text-lg">
                  Completed
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="Active">
              <ActiveTodoList />
            </TabsContent>
            <TabsContent value="Completed">
              <CompleteTodoList />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
