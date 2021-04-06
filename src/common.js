import axios from 'axios';

export const memId = sessionStorage.getItem('MEMBER_ID');

const URL = (window.location.hostname == 'localhost') ? 'https://api.jinseop-api.click' : '//api.jinseop-api.click';

const user = `${URL}/member/`;
export const quiz = `${URL}/quiz/`;
export const member = user;

export const login = (data, callback) => {

    axios.post(`${user}login`, data).then(res => {
        const items = res.data;

        if(items.status === 200){

            const data = items.data;
            // window.memId = sessionStorage.setItem('MEMBER_ID', userId);
            // window.memPw = sessionStorage.setItem('MEMBER_PW', userPw);

            Object.assign(data.info, { loginYn : true });

            sessionStorage.setItem('member', JSON.stringify(data.info));

            callback(data.info); 
            
        }else{
            
            alert(items.data.err_msg);

        }
    }).catch(e => {

        alert(e);

    })
}

export const isEmpty = (params) => {
    return Object.keys(params).length > 0 ? true : false 
}