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
                    <div className="modal-department">所属：{props.modalData.department}</div>
                    <div className="modal-adana">ニックネーム：{props.modalData.adana}</div>
                    <div className="modal-date">入社日：{props.modalData.date}</div>
                    <div className="modal-mail"><a href={props.modalData.mail}>{props.modalData.mail}</a></div>
                </div>
                <div className="modal-PR">{props.modalData.pr}</div>
            </div>
        </div>
    )
}

export default Modal;