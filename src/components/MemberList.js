import React, {Component} from 'react';

import '../stylesheet/MemberList.css'

class MemberList extends React.Component  {
    userList = [];
    this.props.memberList.forEach(function(value){
        user = this.props.loadUserSearch(value.user_id);
        userList.push(user);
    })
    console.log(userList);

    render(){
        memberList = this.props.memberList.map((value)=>{
            return (
                <li className="memberList-item">
                    <img src="" alt=""/>
                    {value.user_name}
                </li>
            )
        })
        return(
            <ul className="memberList">{memberList}</ul>
        )
    }
}

export default MemberList;