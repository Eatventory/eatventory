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
    <div className="p-4 bg-light min-vh-100">
      <h1 className="fw-bold text-center mb-5">Wish List</h1>

      {recipeList.map((item) => (
        <Card
          key={item.id}
          className="mb-4 rounded-4 shadow-sm bg-secondary-subtle border-0"
        >
          <Card.Body className="d-flex align-items-center">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="rounded-circle me-3"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
              }}
            />

            <div className="flex-grow-1">
              <h5 className="fw-semibold mb-1">{item.title}</h5>
              <p className="text-muted small mb-0">
                {item.ingredients}
              </p>
            </div>

            <div className="d-flex flex-column align-items-center ms-3">
              <button className="btn btn-sm p-1 mb-2 bg-transparent border-0 text-danger fs-4">
                <span role="img" aria-label="remove">
                  🚫
                </span>
              </button>
              <Button
                variant="dark"
                size="sm"
                className="rounded-pill"
              >
                해먹기
              </Button>
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
