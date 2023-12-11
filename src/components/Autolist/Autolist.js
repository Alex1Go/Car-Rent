import { AutoCard } from 'components/AutoCard/AutoCard';
import { Item, List } from './Autolist.styled';

export const AutoInfo = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <AutoCard item={item} />
        </Item>
      ))}
    </List>
  );
};
