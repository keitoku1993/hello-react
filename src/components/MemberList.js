import React from 'react';

import '../stylesheet/MemberList.css'

const MemberList = (props) => {
    const memberList = props.memberList.map((value) => {
        return(
            <li className="memberlist-item">
                <div>
                    <img src={value.url} alt="image" width='150'></img>
                </div>
                <div className="memberlist-item-text">
                    <p>{value.name}</p>
                    <p>{value.series}</p>
                </div>
            </li>
        )
    })
    return(
        <ul className="memberlist">{memberList}</ul>
    )
}

export default MemberList;