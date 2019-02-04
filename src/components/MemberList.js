import React from 'react';

import '../stylesheet/MemberList.css'

const MemberList = (props) =>  {
    console.log('props.memberList:', props.memberList);
    const memberList = props.memberList.map( (value) => {
        return (
            <li className="memberlist-item">
                <img className="item-image" src={value.main_photo_url} alt=""/>
                <div className="item-name">{value.user_name}</div>
                <div className="item-department">{value.department_name}</div>
            </li>
        )
    })
    return(
        <ul className="memberlist">{memberList}</ul>
    )
}

export default MemberList;