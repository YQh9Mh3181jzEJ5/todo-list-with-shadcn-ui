import { Input } from "@/components/ui";
import { SearchResults } from "@/features/todos/components";
import { useTodos } from "@/features/todos/hooks/useTodos";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const { todos } = useTodos();
  const searchBarRef = useRef<HTMLDivElement>(null);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className="relative flex-1 max-w-md mx-4">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
      <Input
        type="search"
        placeholder="Search ToDos..."
        className="pl-10 pr-4 rounded-md"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
          setShowResults(event.target.value !== "");
        }}
        onFocus={() => setShowResults(true)}
      />
      {showResults && searchTerm && <SearchResults results={filteredTodos} />}
    </div>
  );
}
