import CatalogPage from 'pages/Catalog';
import HomePage from 'pages/Home';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/favorites">FAVORITES</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/catalog" element={CatalogPage} />

        <Route path="/favorites" element={<div>Favorite</div>} />
      </Routes>
    </div>
  );
};
