import { useState } from 'react';
import { FormControl, InputGroup, Button, ListGroup } from 'react-bootstrap';
import iconSearch from "@/assets/search-2-line.png";

interface Props {
  suggestions: string[];
  onSelect: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ suggestions, onSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredList, setFilteredList] = useState<string[]>([]);
  const [showList, setShowList] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setFilteredList([]);
      setShowList(false);
    } else {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredList(filtered);
      setShowList(true);
    }
  };

  const handleSelect = (value: string) => {
    setQuery(value);
    setShowList(false);
    onSelect(value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSelect(query);
      setShowList(false);
    }
  };

  return (
    <div style={{ position: 'relative', width: '240px' }}>
      <InputGroup
        style={{
          borderRadius: '999px',
          overflow: 'hidden',
          border: '1px solid #aaa',
          backgroundColor: '#fff',
          height: '36px',
        }}
      >
        <FormControl
          value={query}
          onChange={handleInputChange}
          placeholder="재료를 검색하세요"
          style={{
            border: 'none',
            fontSize: '14px',
            paddingLeft: '12px',
          }}
          onFocus={() => {
            if (filteredList.length > 0) setShowList(true);
          }}
        />
        <Button
          variant="light"
          onClick={handleSearch}
          style={{ border: 'none', borderRadius: 0, padding: '0 10px' }}
        >
          <img src={iconSearch} />
        </Button>
      </InputGroup>

      {showList && filteredList.length > 0 && (
        <ListGroup
          style={{
            position: 'absolute',
            top: '40px',
            width: '100%',
            borderRadius: '8px',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          {filteredList.map((item, idx) => (
            <ListGroup.Item
              key={idx}
              action
              onClick={() => handleSelect(item)}
            >
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default SearchBar;
