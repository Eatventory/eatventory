import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Dropdown, Form } from "react-bootstrap";
import Navbar from '@/components/Navbar';

interface RecommendationItem {
  id: number;
  name: string;
  imageUrl: string;
}

const mockData: RecommendationItem[] = [
  { id: 1, name: "비건 오이 무침", imageUrl: "/images/cucumber.jpg" },
  { id: 2, name: "비건 오이 무침", imageUrl: "/images/cucumber.jpg" },
  { id: 3, name: "비건 오이 무침", imageUrl: "/images/cucumber.jpg" },
];

const Recommend: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState('선호순');

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <>
    <div className="d-flex flex-column position-relative">
      {/* Header */}
      <div className="p-0">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-outline-dark rounded-circle">
            ⟳
          </button>
          <h2 className="fw-bold m-0">식단 추천</h2>
          <div style={{ width: '40px' }}></div>
        </div>

        {/* Sort Option */}
        <div className="d-flex justify-content-end align-items-center mb-3">
          <span className="me-2">정렬</span>
          <Form.Select
            size="sm"
            style={{ width: '120px' }}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>선호순</option>
            <option>유통기한순</option>
          </Form.Select>
        </div>

        {/* List */}
        {mockData.map((item) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <Card
              key={item.id}
              onClick={() => toggleSelect(item.id)}
              className={`mb-3 rounded-4 border-0 d-flex flex-row align-items-center px-3 py-2 ${
                isSelected ? 'bg-success text-white' : 'bg-secondary-subtle'
              }`}
              style={{
                cursor: 'pointer',
                width: '360px',
                margin: '0 auto',
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="rounded-circle"
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
              <div className="flex-grow-1 ms-3 fw-semibold">{item.name}</div>

              <div className="d-flex align-items-center gap-2" style={{ minWidth: '50px' }}>
                <button className={`btn btn-sm border-0 bg-transparent ${isSelected ? 'text-white' : 'text-muted'}`}>
                  ⓘ
                </button>
                {isSelected && <span className="fs-5">✅</span>}
              </div>
            </Card>
          );
        })}
      </div>

      <div
        className="position-fixed bottom-90 start-0 end-0 p-3"
        style={{ zIndex: 1000, bottom: '90px' }}
      >
        <Link to="/wishlist">
          <Button className="w-100 rounded-pill py-2 fw-bold" variant="dark">
            다음
          </Button>
        </Link>
      </div>
    </div>
    <Navbar />
    </>
  );
};

export default Recommend;
