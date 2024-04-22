"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [isTyping, setIsTyping] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    router.replace(`/?search=${search}`);
  }, 300);

  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Search for a Pokémon"
      onChange={(e) => {
        setIsTyping(true);
        handleSearch(e.target.value);
      }}
      onBlur={() => setIsTyping(false)}
    />
  );
};
