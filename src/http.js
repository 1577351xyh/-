import axios from 'axios'
import Vue from 'vue'
import router from '../router/router'
export const http = axios.create({
    //基地址
    baseURL: 'http://localhost:8888/api/private/v1/'
});
//post
// 判断账号密码是否正确
http.login = ({ username, password }) => {
    return http.post('login', {
        username,
        password
    })
};
//get
http.users = ({ query, pagenum, pagesize }) => {
    return http.get('users', {
        params: {
            query,
            pagenum,
            pagesize
        }
    });
};
//PUT
// 修改用户状态
http.userState = ({ id, mg_state }) => {
    return http.put(`users/${id}/state/${mg_state}`);
};
//delete
// 删除单个用户
http.delUser = (id) => {
    return http.delete('users/' + id);
};

// 响应拦截器
http.interceptors.response.use(function (response) {
    if (response.data.meta.status == 400 && response.data.meta.msg == "无效token") {
        //提示要登录
        Vue.prototype.$message.warning('先登录哟！');
        //打回登录页
        router.push('/login');
        return;
    }
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

