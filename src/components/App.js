import * as React from 'react';
import axios from 'axios';

import Header from './Header';
import ChangeTab from './ChangeTab';
import MemberList from './MemberList'
import Modal from './Modal'

class App extends React.Component {

    httpClient = '';

    constructor(props){
        super(props);
        this.state = {
            isLogin:false,
            memberList : [],
            departmentList: [],
            modalData:{
                modalOpen: false,
                gazo: '',
                name: '',
                kana: '',
                department:'',
                mail: '',
                adana: '',
                date: '',
                pr:'',
            }
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
        return this.httpClient.get('/who/search', {params:{department_id:id, page: "1"}})
            .then(this.commonResponseHandling)
            .then((result)=>{
                let userList= [] 
                userList = userList.concat(result.item_list);
                if(result.item_list.length === 20){
                    this.httpClient.get('/who/search', {params:{department_id:id, page: "2"}})
                    .then(this.commonResponseHandling)
                    .then((result)=>{
                        userList = userList.concat(result.item_list);
                        if(result.item_list.length === 20){
                            this.httpClient.get('/who/search', {params:{department_id:id, page: "3"}})
                            .then(this.commonResponseHandling)
                            .then((result)=>{
                                userList = userList.concat(result.item_list);
                                this.setState({memberList : userList});
                            })
                        }else{
                            this.setState({memberList : userList});
                        }
                    })
                }else{
                    this.setState({memberList : userList});
                }
            })
    }
    loadFreeWordSearch(word){
        return this.httpClient.get('/who/search', {params:{query:word}})
            .then(this.commonResponseHandling)
            .then((result)=>{
                const userList = result.item_list;
                this.setState({memberList : userList});
            })
    }
    loadUserSearch(userId){
        return this.httpClient.get('/who/user/'+Number(userId))
            .then(this.commonResponseHandling)
            .then((result)=>{
                this.user.push(result);
            })
    }

    commonResponseHandling(res){
        // console.debug(res);
        if(res.data.code !== "200"){
            // console.error(res.data.data);
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

    modalOpen = (index) => {
        const modalTarget = this.state.memberList[index];
        const modalData = {};
        this.httpClient.get('/who/user/'+Number(modalTarget.user_id))
            .then(this.commonResponseHandling)
            .then((result)=>{
                console.log(result);
                modalData.modalOpen = true;
                modalData.gazo = result.main_photo_url;
                modalData.name = result.user_name;
                modalData.kana = result.user_kana;
                modalData.adana = result.nickname;
                modalData.department = result.department_name;
                modalData.mail = result.mail;
                modalData.date = result.enter_date;
                modalData.pr = result.description;
                this.setState({
                    modalData: modalData,
                })
            })
    }

    modalClose = () => {
        const modalData = {
            modalOpen: false,
            gazo: '',
            name: '',
            department:'',
            mail: '',
        }
        this.setState({ modalData: modalData });
      };

    profileUpdate(inputData){
        console.log(inputData);
        var params = new URLSearchParams();
        if(inputData.adana != ''){
            params.append('nickname', inputData.adana);
        }
        if(inputData.enterDate != ''){
            params.append('enter_date', inputData.enterDate);
        }
        if(inputData.pr != ''){
            params.append('description', inputData.pr);
        }
        this.httpClient.post('/profile/update', params)
        .then(this.commonResponseHandling)
        .then((result)=>{
            alert('プロフィールの更新が正常に完了しました。')
        })
    }

    render() {
        let modalComponent;
        if(this.state.modalData.modalOpen){
            modalComponent = <Modal modalData={this.state.modalData} modalClose={this.modalClose} />
        }
        return (
            <div>
              <Header />
              <ChangeTab
                loadDepartmentSearch={(id) => this.loadDepartmentSearch(id)}
                loadFreeWordSearch={(word) => this.loadFreeWordSearch(word)}
                profileUpdate={(inputData)=>this.profileUpdate(inputData)}/>
              <MemberList 
                memberList={this.state.memberList} 
                modalOpen={(index)=>this.modalOpen(index)} 
                loadUserSearch={(userId)=>this.loadUserSearch(userId)}/>
              {modalComponent}
            </div>
        );
    }
}

export default App;

