import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/catalog" />
      <Route path="/favorites" />
    </Routes>
  );
};
