import { useState } from 'react';
import Modal from 'react-modal';
import {
  Photo,
  Text,
  Span,
  Price,
  Info,
  Autoinfo,
  Blockinfo,
  Btn,
  Rental,
} from './AutoCard.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '541px',
    height: '752px',
    borderRadius: '24px',
    background: 'ffffff',
    padding: '40px',
  },
};
Modal.setAppElement('#root');

export const AutoCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    make,
    year,
    model,
    type,
    img,
    functionalities,
    rentalCompany,
    rentalPrice,
    mileage,
    address,
    rentalConditions,
    engineSize,
  } = item;
  return (
    <>
      <div>
        <Photo src={img} alt={make} />
        <Info>
          <Text>
            {make} <Span>{model}</Span>, {year}
          </Text>
          <Price>{rentalPrice}</Price>
        </Info>
        <Blockinfo>
          <Autoinfo>{rentalCompany}</Autoinfo>
          <Autoinfo>{type}</Autoinfo>
          <Autoinfo>{mileage}</Autoinfo>
          <Autoinfo>{functionalities[0]}</Autoinfo>
        </Blockinfo>
      </div>
      <Btn onClick={() => setIsModalOpen(true)}>Learn More</Btn>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(true)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <Photo
            src={img}
            alt={make}
            style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
          />
          <Info>
            <Text style={{ fontSize: '18px' }}>
              {make} <Span style={{ fontSize: '18px' }}>{model}</Span>, {year}
            </Text>
          </Info>
          <Blockinfo>
            <Autoinfo>{address}</Autoinfo>
            <Autoinfo>{rentalCompany}</Autoinfo>
            <Autoinfo>{type}</Autoinfo>
            <Autoinfo>{engineSize}</Autoinfo>
            <Autoinfo>{functionalities[0]}</Autoinfo>
            <Autoinfo>{rentalConditions}</Autoinfo>
            <Autoinfo>{mileage}</Autoinfo>
            <Price>{rentalPrice}</Price>
          </Blockinfo>
        </div>
        <button onClick={() => setIsModalOpen(false)}>close</button>
        <Rental type="button">Rental car</Rental>
      </Modal>
    </>
  );
};
