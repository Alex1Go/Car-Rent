import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Item, List, Container, StyledLink } from './Shared.styled.jsx';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <List>
          <Item>
            <StyledLink to="/">HOME</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/catalog">CATALOG</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/favorites">FAVORITES</StyledLink>
          </Item>
        </List>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
