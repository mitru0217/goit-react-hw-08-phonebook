import { useLocation } from 'react-router-dom';
import Register from '../../pages/Register';
import Login from '../../pages/Login';

export const Personalization = () => {
  const location = useLocation();

  // location.pathname === '/register'
  // location.pathname === '/login'
  return (
    <>
      {location.pathname === '/login' ? (
        <Login />
      ) : location.pathname === '/register' ? (
        <Register />
      ) : null}
    </>
  );
};
