import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTodos } from '../hooks';

export const TodoTabList = () => {
  const { activeTodosCount, completedTodosCount } = useTodos();
  return (
    <div className="my-4">
      <TabsList className="inline-flex w-full h-16">
        <TabsTrigger value="Active" className="flex-1 h-full text-lg">
          Active
          {activeTodosCount > 0 && (
            <span className="ml-2 flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm">
              {activeTodosCount}
            </span>
          )}
        </TabsTrigger>
        <TabsTrigger value="Completed" className="flex-1 h-full text-lg">
          Completed
          {completedTodosCount > 0 && (
            <span className="ml-2 flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm">
              {completedTodosCount}
            </span>
          )}
        </TabsTrigger>
      </TabsList>
    </div>
  );
};
