import React, { useCallback, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../../../assets/js/common';
import { REGISTOR, ID_CHECK} from '../../../api/api';
import { loginJoin } from '../../../store/action/action';
import DefaultApi from '../../../api/axios';


const Join = ({ history }) => {
    const [ user, setUser ] = useState({
        id : '',
        pw : '',
        passfrom : '',
        nickname : ''
    });

    const [ isValue, setIsValue ] = useState({
        isIdValue : true,
        isNickValue : true,
        isPassValue : true
    })

    const { id, pw, nickname, passfrom} = user; 

    const { isIdValue, isNickValue, isPassValue } = isValue; 

    const dispatch = useDispatch();

    const changeJoinData = (e) => {

        const data = e.target;

        // checkValue(data);

        setUser({
            ...user,
            [data.name] : data.value
        })
    }

    React.useEffect(() => {
        const isPass = (pw === passfrom) ? true : false;

        setIsValue({
            ...isValue,
            isPassValue : isPass
        });

    }, [pw, passfrom])

    const checkValue = useCallback((data) => {
        if(data.name === 'nickname' || data.name === 'id'){
            const type = data.name === 'id' ? 'email' : data.name;
            DefaultApi.post(ID_CHECK, { type : type, value : data.value}).
                then(res => {
                    const items = res.data;
                    if(items.status === 200){
                        if(type === 'email'){
                            setIsValue({
                                ...isValue,
                                isIdValue : items.data.type
                            })
                        }else if(type === 'nickname'){
                            setIsValue({
                                ...isValue,
                                isNickValue : items.data.type
                            })
                        }
                    }else{
                        alert('?????? ?????? ?????????.');
                    }
            });
        }
    })

    const userJoin = useCallback(async () => {
        
        if(id === ''){
            alert('???????????? ??????????????????.');
            return;
        }else if(pw === ''){
            alert('??????????????? ??????????????????.');
            return;
        }else if(nickname === ''){
            alert('???????????? ??????????????????.');
            return;
        }

        if(isIdValue === false){
            alert('???????????? ?????????????????????.');
            return;
        }else if(isNickValue === false){
            alert('???????????? ?????????????????????.');
            return;
        }else if(isPassValue === false){
            alert('??????????????? ????????????.');
            return;
        }

        goToJoin();
    })


    const goToJoin = () => { 
        DefaultApi.post(REGISTOR, user).then(res => {
            const items = res.data;
            if(items.status === 200){
                delete user.nickname;
                login(user, (data) => {
                    dispatch(loginJoin(data));
                });
            }else{
                alert(items.data.err_msg);
            }
        }).catch(e => {
            console.log(e);
        })
    }

    const goToLogin = () => {
        history.push('login');
    }

    return(
        <div>
            ????????????
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>?????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    placeholder="Recipient's id" 
                    name="id" 
                    onChange={(e) => changeJoinData(e)} 
                    value={id}/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    placeholder="Recipient's password" 
                    type="password" 
                    name="pw" 
                    onChange={(e) => changeJoinData(e)}  
                    value={pw}/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>???????????? ??????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    placeholder="Recipient's password" 
                    type="password" 
                    name="passfrom" 
                    onChange={(e) => changeJoinData(e)}  
                    value={passfrom}/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>??????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    placeholder="Recipient's username" 
                    name="nickname" 
                    onChange={(e) => changeJoinData(e)}  
                    value={nickname}/>
            </InputGroup>


            <Button variant={(isIdValue === true && isNickValue === true && isPassValue === true ? 'primary' : 'secondary')} onClick={() => userJoin()}>Join</Button>
            <Button variant="outline-secondary" className={'margin'} onClick={() => goToLogin()}>?????????</Button>
        </div>
    )
}


export default Join;