import React from 'react';

import '../stylesheet/MemberList.css'

const MemberList = (props) =>  {
    console.log('props.memberList:', props.memberList);
    const memberList = props.memberList.map( (value, index) => {
        return (
            <li value={index} className="memberlist-item" onClick={(event) => props.modalOpen(event.target.value)}>
                <img value={index} className="item-image" src={value.photo_url} alt="" onClick={(event) => props.modalOpen(event.target.value)}/>
                <div value={index} className="item-name" onClick={(event) => props.modalOpen(event.target.value)}>{value.user_name}</div>
                <div value={index} className="item-department" onClick={(event) => props.modalOpen(event.target.value)}>{value.department_name}</div>
                <div value={index} className="item-caption">VIEW MORE</div>
            </li>
        )
    })
    return(
        <ul className="memberlist">{memberList}</ul>
    )
}

export default MemberList;