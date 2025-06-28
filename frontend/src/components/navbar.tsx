import { useLocation, Link } from "react-router-dom";
import IconHome from "@/assets/home-4-line.svg";
import IconCamera from "@/assets/camera-lens-fill.svg";
import IconMypage from "@/assets/user-3-line.svg";
import IconMypageActive from "@/assets/user-3-fill.svg";
import IconShopping from "@/assets/shopping-bag-3-line.svg";
import IconShoppingActive from "@/assets/shopping-bag-3-fill.svg";
import IconRestaurant from "@/assets/restaurant-2-line.svg";
import IconRestaurantActive from "@/assets/restaurant-2-fill.svg";
import IconSearch from "@/assets/search-line.svg";
import IconSearchActive from "@/assets/search-fill.svg";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const iconHome = pathname === "/" ? IconCamera : IconHome;
  const iconMypage = pathname === "/mypage" ? IconMypageActive : IconMypage;
  const iconRecipeSearch = pathname === "/recipesearch" ? IconSearchActive : IconSearch;
  const iconRecommend = pathname === "/recommend" ? IconRestaurantActive : IconRestaurant;
  const iconWishlist = pathname === "/wishlist" ? IconShoppingActive : IconShopping;

  return (
    <div className="fixed-bottom bg-light border-top d-flex justify-content-around py-2">
      <div className="text-center">
        <Link to="/mypage">
          <img src={iconMypage} style={{ width: "48px" }} />
        </Link>
        <div>
          <small>마이페이지</small>
        </div>
      </div>
      <div className="text-center text-reset">
        <Link to="/recipesearch">
          <img src={iconRecipeSearch} style={{ width: "48px" }} />
        </Link>
        <div>
          <small>식단 검색</small>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/"
          className="d-inline-block bg-white rounded-circle shadow-sm"
          style={{ padding: "10px" }}
        >
          <img src={iconHome} style={{ width: "48px" }} />
        </Link>
      </div>
      <div className="text-center">
        <Link to="/recommend">
          <img src={iconRecommend} style={{ width: "48px" }} />
        </Link>
        <div>
          <small>식단 추천</small>
        </div>
      </div>
      <div className="text-center">
        <Link to="/wishlist">
          <img src={iconWishlist} style={{ width: "48px" }} />
        </Link>
        <div>
          <small>위시리스트</small>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
