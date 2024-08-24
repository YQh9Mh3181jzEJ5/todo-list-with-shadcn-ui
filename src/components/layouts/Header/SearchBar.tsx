import { Input } from '@/components/ui';
import { SearchResults } from '@/features/todos/components';
import { useTodos } from '@/features/todos/hooks';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);
  const { todos } = useTodos();

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="relative flex-1 max-w-md mx-4">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
      <Input
        type="search"
        placeholder="Search todos..."
        className="pl-10 pr-4 rounded-md"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
          setShowResults(event.target.value !== '');
        }}
      />
      {showResults && searchTerm && <SearchResults results={filteredTodos} />}
    </div>
  );
};
