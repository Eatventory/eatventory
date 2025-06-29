// SearchPage.tsx
import React, { useState } from "react";
import SearchBar from "@/components/Searchbar";
import Navbar from "@/components/Navbar";
import { Container } from "react-bootstrap";

const ingredients = [
  "오이",
  "오레오",
  "오크라",
  "오가피순",
  "오랑캐콩",
  "오이냉이",
  "오동나무순",
];

const SearchRecipe: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedItem(value);
    console.log("선택된 재료:", value);
  };

  return (
    <>
      <Container className="p-0">
        <h2 className="text-center fw-bold mb-4">재료 검색</h2>

        <SearchBar suggestions={ingredients} onSelect={handleSelect} />

        {selectedItem && (
          <p className="text-center mt-4">
            🔍 <strong>{selectedItem}</strong> 를 선택하셨습니다.
          </p>
        )}
      </Container>
      <Navbar />
    </>
  );
};

export default SearchRecipe;
