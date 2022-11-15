import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren{
  type: string;
  show: boolean;
  clickDismissable?: boolean;
  onDismiss: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({type,show,clickDismissable, onDismiss,children}) => {
    let dpNoneBlock: string = ' ';

    if (!show) {
        dpNoneBlock += 'd-none'
    }
  return (
    <>
    <div className={'mt-4 ms-5 me-5 d-flex justify-content-between alert alert-' + type + dpNoneBlock} onClick={onDismiss}>
        {children}
        <button className={"btn btn-danger"} style={{display: clickDismissable? 'none' : 'inline-block'}} onClick={onDismiss}>X</button>
    </div>
    </>
  );
};

export default Alert;