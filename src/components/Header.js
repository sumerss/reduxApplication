import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../reduxStore/auth';

const Header = () => {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='https://myproducts-thales.com/'>My Products</a>
          </li>
          <li>
            <a style={{ cursor: 'pointer' }} onClick={() => window.open('https://myproducts-thales.com/')}>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
