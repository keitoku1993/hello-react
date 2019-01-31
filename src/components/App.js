import * as React from 'react';
import axios from 'axios';

import Header from './Header';
import ChangeTab from './ChangeTab';
import MemberList from './MemberList'

class App extends React.Component {

    httpClient = '';

    constructor(props){
        super(props);
        this.state = {
            isLogin:false,
            memberList : [],
            user:null,
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
                return this.loadDepartments();
            })
            .catch((err)=>{
                alert("APIがエラーを返しました\n\n" + err);
            })

        ;
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
    loadDepartmentSerch(){
        return this.httpClient.get('/who/departments')
            .then(this.commonResponseHandling)
            .then((result)=>{
                console.log(result);
                this.setState({memberList : result});
            })
    }
    loadUserSearch(){
        return this.httpClient.get('/who/user/2')
            .then(this.commonResponseHandling)
            .then((result)=>{
                this.setState({memberList : result});
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
                loadUserSearch={(word) => this.loadUserSearch(word)}/>
              <MemberList  memberList={this.state.memberList}/>
            </div>
        );
    }
}

export default App;

