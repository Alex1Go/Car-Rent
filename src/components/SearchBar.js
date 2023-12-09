import { BrandFilter } from './BrandFilter';
import { ButtonFilter } from './ButtonFilter';
import { MileFilter } from './MileFilter';
import { PriceFilter } from './PriceFilter';

export const SearchBar = () => {
  return (
    <>
      <BrandFilter />
      <PriceFilter />
      <MileFilter />
      <ButtonFilter />
    </>
  );
};
