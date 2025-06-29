import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 Error</h1>
      <Link to='/'><button className="btn btn-primary">Go to the main page</button></Link>
    </>
  );
}

export default NotFound;
