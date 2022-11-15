import React from 'react';
import Backdrop from "../Backdrop/Backdrop";

interface Props extends React.PropsWithChildren{
  title: string;
  show: boolean;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({show, title, onClose, children}) => {
  return (
    <>
      <Backdrop show={show}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content p-2">

            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn btn-danger" onClick={onClose}>X</button>
            </div>

            <div className='ms-3'>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;