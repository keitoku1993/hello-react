import * as React from 'react';
import axios from 'axios';

import Header from './Header';
import ChangeTab from './ChangeTab';
import MemberList from './MemberList'

class App extends React.Component {

    httpClient = '';
    user = {};

    constructor(props){
        super(props);
        this.state = {
            isLogin:false,
            memberList : [],
            user:null,
            departmentList: [],
        };
    }

    componentDidMount() {
        this.httpClient = axios.create({
            baseURL:'https://kadou.i.nijibox.net/api',
            withCredentials:true,
        });

        this.loadAuth()
            .then(()=>{
                if(! this.state.isLogin){
                    return Promise.resolve();
                }
            })
            .catch((err)=>{
                alert("APIがエラーを返しました\n\n" + err);
            });
        
        this.loadDepartment()
    }
    loadAuth(){
        return this.httpClient.get('/auth' , {params:{callback:'http://localhost:3000'}})
            .then(this.commonResponseHandling)
            .then((result)=>{
                if(result.is_login){
                    this.setState({isLogin:true});
                }else if(result.auth_url){
                    window.location.href = result.auth_url;
                }
            });
    }
    loadDepartment(){
        return this.httpClient.get('/who/departments')
            .then(this.commonResponseHandling)
            .then((result)=>{
                this.setState({departmentList : result});
            })
    }
    loadDepartmentSearch(id){
        return this.httpClient.get('/who/search', {params:{department_id:id}})
            .then(this.commonResponseHandling)
            .then((result)=>{
                const memberList = [];
                const userList = result.item_list;
                console.log(userList)
                userList.forEach((item) => {
                    memberList.push(this.loadUserSearch(item.user_id));
                })
                this.setState({memberList : memberList});
            })
    }
    loadFreeWordSearch(word){
        return this.httpClient.get('/who/search', {params:{query:word}})
            .then(this.commonResponseHandling)
            .then((result)=>{
                console.log(result);
                this.setState({memberList : result.item_list});
            })
    }
    loadUserSearch(userId){
        this.httpClient.get('/who/user/'+Number(userId))
            .then(this.commonResponseHandling)
            .then((result)=>{
                console.log(result);
            })
    }

    commonResponseHandling(res){
        console.debug(res);
        if(res.data.code !== "200"){
            console.error(res.data.data);
            return Promise.reject("API Error:" + res.data.data.message);
        }
        return Promise.resolve(res.data.data);
    }

    clickHandler = ()=>{
        this.loadSearch()
            .catch((err)=>{
                alert('エラー発生');
            });
    };

    render() {
        return (
            <div>
              <Header />
              <ChangeTab
                loadDepartmentSearch={(id) => this.loadDepartmentSearch(id)}
                loadFreeWordSearch={(word) => this.loadFreeWordSearch(word)}/>
              <MemberList  memberList={this.state.memberList}/>
            </div>
        );
    }
}

export default App;

