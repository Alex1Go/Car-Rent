import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={Home} />
      <Route path="/catalog" element={Catalog} />
      <Route path="/favorites" element={Favorites} />
    </Routes>
  );
};
