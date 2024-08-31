import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='form m-2'>
      <div>404</div>
      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </div>
  );
};
export default NotFound;
