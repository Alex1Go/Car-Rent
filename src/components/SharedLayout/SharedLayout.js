import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, Item, List, Container } from './Shared.styled.jsx';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <List>
          <Item>
            <NavLink to="/">HOME</NavLink>
          </Item>
          <Item>
            <NavLink to="/catalog">CATALOG</NavLink>
          </Item>
          <Item>
            <NavLink to="/favorites">FAVORITES</NavLink>
          </Item>
        </List>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
