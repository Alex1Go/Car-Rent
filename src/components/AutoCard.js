// import { useState } from 'react';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };
// Modal.setAppElement('#root');

// export const AutoCard = ({ item: { brand } }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <h2>Brand:{brand}</h2>
//       <p>Mileas</p>
//       <button onClick={() => setIsModalOpen(true)}>Learn More</button>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(true)}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h3>COOL</h3>
//         <button onClick={() => setIsModalOpen(false)}>close</button>
//       </Modal>
//     </>
//   );
// };
