/*
* @Author: Yanic
* @Date: 2018-03-12 11:27:00
* @Last Modified by:   Yanic
* @Last Modified time: 2018-03-12 11:27:00
*/

import axios from 'axios';
import { message } from 'antd';
import { session } from "./tools.js";
import { setCookie, getCookie } from "./cookie.js";
import { debug } from "./debug.js";

// 网关环境 dev:开发环境，test：测试环境， pre:预发布环境，pro:生产环境
const NODE_ENV = process.env.NODE_ENV
console.log(NODE_ENV);

// axios.defaults.baseURL = config.urcPath;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common['group'] = 'rpc-service-group-' + 'test';  
axios.defaults.headers.common['prefix'] = 'com.yks';  // 服务前缀（默认com.yks）
axios.defaults.headers.common['version'] = '1.0'  // 接口版本
axios.defaults.timeout = 30000;

// 请求拦截器
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})



// 响应拦截器即异常处理
axios.interceptors.response.use(res => {
    if (res.data.state == '100002') {
        setCookie('ticket', '', -1)
        setCookie('username', '', -1)
        location.href = '/'
    }
    return res
}, err => {
    if (err) {
        console.log(err);
        switch (err.response.status) {
            case 400:
                message.error('错误请求.');
                return false;
                break;
            case 401:
                message.error('未授权，请重新登录.');
                return false;
                break;
            case 403:
                message.error('拒绝访问.');
                return false;
                break;
            case 404:
                message.error('请求错误,未找到该资源.');
                return false;
                break;
            case 405:
                message.error('请求方法未允许.');
                return false;
                break;
            case 408:
                message.error('请求超时.');
                return false;
                break;
            case 500:
                message.error('服务器端出错.');
                return false;
                break;
            case 501:
                message.error('网络未实现.');
                return false;
                break;
            case 502:
                message.error('网络错误.');
                return false;
                break;
            case 503:
                message.error('服务不可用.');
                return false;
                break;
            case 504:
                message.error('网络超时.');
                return false;
                break;
            case 505:
                message.error('http版本不支持该请求.');
                return false;
                break;
            default:
                message.error(`连接错误${err.response.status}`);
        }
    } else {
        message.err('连接到服务器失败');
    }
    return Promise.resolve(err.response)
})

export const req = {
    /*
    * ajax 请求封装
    * 
    * @param <String> url 接口地址，例：/urc/motan/service/api/IUrcService/login
    * @param <Object> values 请求参数对象
    * @param <Object> paramType 网关环境，默认{ 'Content-Type': 'application/json;charset=UTF-8', 'paramType': '1' }
    * @param <String> type 传输方式，默认post
    * 
    */
    http(url, values, paramType, type) {

        var params = {
            method: type || 'post',
            url: url,
            data: values,
            headers: paramType || { 'Content-Type': 'application/json', 'paramType': '1' }
        }

        if(paramType){
            if (paramType.paramType === '2') {
                params.transformRequest = [function(data){
                    let res = ''
                    for (let key in data) {
                        res += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
                    }
                    return res
                }]
            }
        }else{
            values.ticket = session('ticket');
            values.operator = session('username');
            values.moduleUrl = location.pathname;
            values.funcVersion = getCookie('funcVersion');
        }
        return new Promise((resolve) => {
            axios(params).then(res => {
                if (res) {
                    if (res.data.state === '000001') {
                        debug('ajax[' + url + '] response result:', {
                            request: {
                                url: url,
                                data: values,
                                type: (type || 'post')
                            },
                            response: {
                                res: res
                            }
                        })
                        resolve(res.data)
                    } else {
                        switch (res.data.state) {
                            case '000000':
                                message.error('失败.');
                                return false;
                                break;
                            case '000002':
                                message.error('请求参数为空.');
                                return false;
                                break;
                            case '000003':
                                message.error('请求参数非法.');
                                return false;
                                break;
                            case '000004':
                                message.error('JSON转换失败.');
                                return false;
                                break;
                            case '000005':
                                message.error('数据库异常.');
                                return false;
                                break;
                            case '000006':
                                message.error('网络异常.');
                                return false;
                                break;
                            case '000007':
                                message.error('未知异常.');
                                return false;
                                break;
                            case '000008':
                                message.error('数据处理异常.');
                                return false;
                                break;
                            case '100001':
                                message.error('账号密码错误.');
                                return false;
                                break;
                            case '100003':
                                message.error('账号没有权限.');
                                return false;
                                break;
                            case '100004':
                                message.error('没有检测到登录用户信息.');
                                return false;
                                break;
                            default:
                                message.error(`其他错误.`);
                                return false;
                        }
                    }
                } else {
                    message.error('服务器响应为空.');
                    return false;
                }

            })
        })
    }
}

