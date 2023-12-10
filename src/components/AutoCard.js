import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
        <img src={img} alt={make} width="100px" />
        <p>
          {make} <span>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
        <p>{rentalCompany}</p>
        <p>{type}</p>
        <p>{mileage}</p>
        <p>{functionalities[0]}</p>
      </div>

      <button onClick={() => setIsModalOpen(true)}>Learn More</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(true)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3>COOL</h3>
        <button onClick={() => setIsModalOpen(false)}>close</button>
      </Modal>
    </>
  );
};
