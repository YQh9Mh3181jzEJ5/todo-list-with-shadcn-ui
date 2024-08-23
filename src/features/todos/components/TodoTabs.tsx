import { TodoTabList, TodoTabContent } from '@/features/todos/components';
import { Tabs } from '@/components/ui/tabs';

export const TodoTabs = () => {
  return (
    <Tabs defaultValue="Active">
      <TodoTabList />
      <TodoTabContent />
    </Tabs>
  );
};
