import axios from 'axios'

import { ElLoading, ElMessage } from 'element-plus';
import router from '../router'
import message from './Message';

const contentTypeForm = "application/x-www-form-urlencoded;charset=UTF-8";
const contentTypeJson = "application/json";
const contentTypeFile = "multipart/from-data";

const request = (config) => {
    // let url = config.url;
    // let params = config.params || {};
    // let dataType = config.dataType;
    // let showLoading = config.showLoading;
    // 以上语句可简写为下方语句
    let { url, params, dataType, showLoading } = config;

    dataType = dataType ? "form" : dataType;
    showLoading = showLoading ? true : showLoading;
    
    let contentType = contentTypeForm;
    if(dataType === "json") {
        contentType = contentTypeJson;
    } else if(dataType === "file") {
        contentType = contentTypeFile;
        let param = new FormData();
        for(let key in params) {
            param.append(key, params[key]);
        }
        params = param;
    }

    const instantce = axios.create({
        baseURL: '/api',
        timeout: 10 * 1000,
        headers: {
            'Content-Type': contentType,
            'X-Requesred-With': 'XMLHttpRequest',
        }
    })

    let loading = null;
    instantce.interceptors.request.use(
        (config) => {
            if(showLoading) {
                loading = ElLoading.service({
                    lock: true,
                    text: '加载中......',
                    background: 'rgba(0, 0, 0, 0.7)',
                })
            }
            return config;
        },
        (error) => {
            if(showLoading && loading) {
                loading.close();
            }
            message.error('发送请求失败');
            return Promise.reject('发送请求失败');
        }
    )

    // 请求后拦截
    instantce.interceptors.response.use(
        (response) => {
            if(showLoading && loading) {
                loading.close();
            }
            const responseData = response.data
            if(responseData.status == "error") {
                if(config.errorCallBack) {
                    config.errorCallBack();
                }
                return Promise.reject(responseData.info);
            } else {
                if(responseData.code == 200) {
                    return response;
                } else if(responseData.code == 901) {
                    setTimeout(() => {
                        router.push("/login");    // 登录超时自动跳转到登录页
                    }, 2000)
                    return Promise.reject("登录超时");
                }
                return responseData
            }
        },
        (error) => {
            if(showLoading && loading) {
                loading.close();
            }
            console.log(error);
            return Promise.reject("网络异常")
        }
    )

    // 写法一
    return instantce.post(url, params).catch(error => {
        message.error(error);
        return error;
    })
    
    // 写法二
    // let result = new Promise((resolve, reject) => {
    //     instantce.post(url, params).then(res => {
    //         resolve(res);
    //     }).catch(error => {
    //         message.error(error)；
    //     })
    // })
    // return result;
}

export default request;
