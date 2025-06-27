function Navbar() {
  return (
    <div className="fixed-bottom bg-light border-top d-flex justify-content-around py-2">
      <div className="text-center">
        <div><i className="ri-user-3-line"></i></div>
        <small>마이페이지</small>
      </div>
      <div className="text-center">
        <div><i className="ri-search-line"></i></div>
        <small>식단 검색</small>
      </div>
      <button type="button" className="btn btn-default btn-circle btn-lg bg-white shadow-sm">
        <div><i className="ri-camera-lens-line"></i></div>
      </button>
      <div className="text-center">
        <div><i className="ri-restaurant-2-line"></i></div>
        <small>식단 추천</small>
      </div>
      <div className="text-center">
        <div><i className="ri-shopping-bag-3-line"></i></div>
        <small>위시리스트</small>
      </div>
    </div>
  );
}

export default Navbar;