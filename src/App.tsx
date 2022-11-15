import React, { useState } from 'react';
import Modal from './Components/Modal/Modal';
import Alert from './Components/Alert/Alert';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  const cancel = () => setShowModal(false);

  const closeAlert = () => {
    setShowAlert(false)
  };

  const closeAlert2 = () => {
    setShowAlert2(false)
  };

  return (
    <div className="App">
      <button onClick={() => setShowModal(true)} className="btn btn-primary m-2">Show Modal</button>
      <Modal show={showModal} onClose={cancel} title="Some kinda modal title">
        <p>This is modal content</p>
      </Modal>
      <Alert type="success" show={showAlert} onDismiss={closeAlert}>This is a success</Alert>
      <Alert type="primary" show={showAlert2} onDismiss={closeAlert2} clickDismissable>This is a primary</Alert>
    </div>
  );
}

export default App; 
