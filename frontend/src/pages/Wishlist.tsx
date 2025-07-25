import { Button, Card } from "react-bootstrap";
import Navbar from '@/components/Navbar';

interface RecipeItem {
  id: number;
  title: string;
  ingredients: string;
  imageUrl: string;
}

const recipeList: RecipeItem[] = [
  {
    id: 1,
    title: "올리브 고추장 장아찌",
    ingredients:
      "고추장 2큰술, 로즈마리 2줄기, 올리브유 3큰술, 올리브 1/2컵, 통후추 1작은술",
    imageUrl: "/images/recipe1.jpg",
  },
  {
    id: 2,
    title: "토마토 파스타 샐러드",
    ingredients:
      "방울토마토 15개, 파스타면 1인분, 콘옥수수 1큰술, 마늘 1알, 레몬즙 1작은술, 미나리 1/4단",
    imageUrl: "/images/recipe2.jpg",
  },
  {
    id: 3,
    title: "언양식 콩고기",
    ingredients:
      "방울토마토 15개, 파스타면 1인분, 콘옥수수 1큰술, 마늘 1알, 레몬즙 1작은술, 미나리 1/4단",
    imageUrl: "/images/recipe3.jpg",
  },
];

const WishList: React.FC = () => {
  return (
    <>
    <div>
      <h1 className="fw-bold text-center mb-5">Wish List</h1>

      {recipeList.map((item) => (
        <Card
        key={item.id}
        className="mb-4 rounded-4 shadow-sm bg-secondary-subtle border-0"
      >
        <Card.Body className="d-flex align-items-start gap-3">
          <img
            src={item.imageUrl || '/images/default.jpg'}
            alt=""
            className="rounded-circle bg-light"
            style={{
              width: '70px',
              height: '70px',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />

          <div
            className="flex-grow-1 d-flex flex-column justify-content-between"
            style={{ minHeight: '90px', position: 'relative' }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="fw-semibold" style={{ fontSize: '1rem' }}>
                {item.title}
              </div>
              <button
                className="btn text-danger p-0"
                style={{ fontSize: '1.3rem', lineHeight: 1 }}
                aria-label="삭제"
              >
                🚫
              </button>
            </div>

            <div className="text-muted small" style={{ lineHeight: '1.4' }}>
              {item.ingredients}
            </div>

            <div className="text-end mt-2">
              <Button
                variant="dark"
                size="sm"
                className="rounded-pill px-3 py-1"
              >
                해먹기
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      ))}
    </div>
    <Navbar />
    </>
  );
};

export default WishList;
