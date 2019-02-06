import React from 'react';

import '../stylesheet/Modal.css'

const Modal = (props) =>  {
    return(
        <div className="modal-overlay" onClick={props.modalClose}>
            <div className="modal">
                <img className="modal-image" src={props.modalData.gazo} />
                <div className="modal-textarea">
                    <div className="modal-name">{props.modalData.name}</div>
                    <div className="modal-kana">{props.modalData.kana}</div>
                    <div className="modal-department">{props.modalData.department}</div>
                    <div className="modal-mail">{props.modalData.mail}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;