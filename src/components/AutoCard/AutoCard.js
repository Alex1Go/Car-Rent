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
        <button onClick={() => setIsModalOpen(false)}>close</button>
      </Modal>
    </>
  );
};
