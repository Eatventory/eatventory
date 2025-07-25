import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const getTestToken = () => { // 로그인 했다고 가정하고 임시로 토큰 부여
    localStorage.setItem("token", "test");
    navigate('/');
  }

  return (
    <>
      <h1>Leafridge</h1>
      <h2>
        당신을 위한
        <br />
        비건 냉장고
      </h2>
      <button
        className="google-btn d-flex align-items-center shadow rounded p-0"
        onClick={ getTestToken }
      >
        <div className="google-icon-wrapper d-flex align-items-center justify-content-center h-100">
          <img
            className="google-icon"
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
        </div>
        <span className="text-white p-0 px-2">Sign up with Google</span>
      </button>
    </>
  );
}

export default Login;