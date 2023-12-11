import { fetchCards } from 'api';
import { AutoForm } from 'components/AutoForm/AutoForm';
import { AutoInfo } from 'components/Autolist/Autolist';
import { Button } from 'components/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchCards('').then(setCards);
  }, []);
  return (
    <div>
      <AutoForm />
      <AutoInfo items={cards} />
      <Button />
    </div>
  );
};

export default Catalog;
