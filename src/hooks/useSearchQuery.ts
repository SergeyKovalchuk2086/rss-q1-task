import { useState, useEffect } from "react";

export const useSearchQuery = (key: string, initialValue = "") => {
  const [query, setQuery] = useState(() => {
    const storedQuery = localStorage.getItem(key);
    return storedQuery ? JSON.parse(storedQuery) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(query));
  }, [key, query]);

  return [query, setQuery];
};
