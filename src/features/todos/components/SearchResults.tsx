import { Todo } from '../types';

interface SearchResultsProps {
  results: Todo[];
}

export const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-700 shadow-lg rounded-md max-h-60 overflow-y-auto">
      {results.length > 0 ? (
        results.map((todo) => (
          <div key={todo.id} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-600">
            {todo.text}
          </div>
        ))
      ) : (
        <div className="p-2 text-gray-500 dark:text-gray-200">No results found</div>
      )}
    </div>
  );
};
