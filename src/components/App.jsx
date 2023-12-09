// import { Route, Routes } from 'react-router-dom';

import autoItems from '../data.json';
import { AutoInfo } from './Autolist';
import { SearchBar } from './SearchBar';
export const App = () => {
  return (
    <>
      <SearchBar />
      <AutoInfo items={autoItems} />
    </>
    // <Routes>
    //   <Route path="/" />
    //   <Route path="/catalog" />
    //   <Route path="/favorites" />
    // </Routes>
  );
};
