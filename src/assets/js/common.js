import { LOGIN } from '../../api/api';
import DefaultAPI from '../../api/axios';

export const login = (info, callback) => {
  DefaultAPI.post(LOGIN, info).then(res => {
    const items = res.data;
      if (items.status === 200) {
        const data = items.data;
        Object.assign(data.info, { loginYn: true });
        sessionStorage.setItem('member', JSON.stringify(data.info));
        callback(data.info);
      } else {
        alert(items.data.err_msg);
      }
  }).catch(e => {
    alert(e);
  });
};

export const isEmpty = params => {
  return Object.keys(params).length > 0 ? true : false;
};
