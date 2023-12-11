import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1184px;
  padding: 0px 128px;
`;

export const Header = styled.header`
  margin: 20px 0px;
  background-color: rgb(173, 199, 199);
  padding: 10px 20px;
  border-radius: 5px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 18px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
`;

export const Item = styled.li`
  :hover,
  :focus {
    color: rgb(4, 134, 134);
  }
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: rgb(3, 139, 139);
  }
`;
