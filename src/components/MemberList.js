import React from 'react';

import '../stylesheet/MemberList.css'

const MemberList = (props) =>  {
    console.log(props.memberList);
    const memberList = props.memberList.map((value)=>{
        return (
            <li className="memberList-item">
                aaa
            </li>
        )
    })
    return(
        <ul className="memberList">{memberList}</ul>
    )
}

export default MemberList;