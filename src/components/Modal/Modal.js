import {
  Autoinfo,
  Blockinfo,
  Info,
  Photo,
  Price,
  Span,
  Text,
  Window,
} from './Modal.styled';

export const ModalWindow = ({ carInfo, isModalOpen, setIsModalOpen }) => {
  const {
    make,
    year,
    model,
    type,
    img,
    functionalities,
    rentalCompany,
    address,
    rentalPrice,
    // accessories,
    mileage,
    // description,
    // rentalConditions,
    // engineSize,
    // fuelConsumption,
  } = carInfo;
  return (
    <Window>
      <Photo src={img} alt={make} />
      <Info>
        <Text>
          {make} <Span>{model}</Span>, {year}
        </Text>
        <Price>{rentalPrice}</Price>
      </Info>
      <Blockinfo>
        <Autoinfo>{address}</Autoinfo>
        <Autoinfo>{rentalCompany}</Autoinfo>
        <Autoinfo>{type}</Autoinfo>
        <Autoinfo>{mileage}</Autoinfo>
        <Autoinfo>{functionalities[0]}</Autoinfo>
      </Blockinfo>
      <button onClick={() => setIsModalOpen(false)}>close</button>
    </Window>
  );
};
