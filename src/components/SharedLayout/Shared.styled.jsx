import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px;
`;

export const Header = styled.header`
  margin-bottom: 20px;
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
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 18px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  color: rgb(8, 236, 236);

  :hover,
  :focus {
    color: rgb(6, 133, 133);
  }
`;
export const StyledLink = styled.NavLink`
  color: black;

  &.active {
    color: orange;
  }
`;
