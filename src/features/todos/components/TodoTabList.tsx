import { TabsList, TabsTrigger } from '@/components/ui/tabs';

export const TodoTabList = () => {
  return (
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
  );
};
