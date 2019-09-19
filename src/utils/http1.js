import axios from 'axios'
import apis from '../api/Apis'
import store from '../store'
import {
  getToken
} from '@/utils/auth'

import {
  Notification
} from 'element-ui'

!(function (win, doc) {
  //系统http请求实例封装
  function XH() {
    this.systype = "web"
    this.version = "1.0.4"
  }
  // Error方法
  const isHavedNotify = ()=>{
    let dom  = document.getElementsByClassName("el-notification__icon el-icon-error");
    let result = false;
    if(dom && dom.length >0){
      result = true
  
    }
    return result;

  }
  const NotificationError =(msg)=>{
    if(isHavedNotify())return;
    Notification.error({
      message: msg,
      showClose: true,
      duration: 5000
    })

  }
  XH.prototype.http = function (cfg) {
    let _self = this
    return new Promise(function (resolve, reject) {
      let headers = {
        systype: _self.systype,
        version: _self.version,
      }
      // 配置请求头
      if (cfg.url == 'GW_gateWayEdit') {
        headers['Content-Type'] = 'application/json'
      }
      // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
      if (store.getters.token) {
        headers['Authorization'] = 'Bearer ' + getToken()
      }
      //自传header
      if (cfg.header)
        headers = Object.assign(headers, cfg.header)
      //参数拼接在url后面
      let url = '';
      if (cfg.isurlparam) {
        url = apis[cfg.url] + '/' + cfg.params;
        cfg.params = {}
      } else {
        url = apis[cfg.url]
      }
      if(url.indexOf('ys7')>0){
        headers['Authorization'] = '';
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }
      // 创建自定义axios实例
      let service = axios.create({
        timeout: 30000, // 请求超时时间
        headers: headers
      });
      let hconfig = {
        url: url,
        method: cfg.type
      }
      if (cfg.responseType)
        hconfig.responseType = cfg.responseType || {}
      if (cfg.params)
        hconfig.params = cfg.params || {}
      if (cfg.data)
        hconfig.data = cfg.data || {}

      service(hconfig).then(response => {
          const res = response.data
          if (res.code && res.code != 200) {
            NotificationError( res.msg)
    
            reject(res)
          }
          resolve(res)
        },
        error => {
          const res = error.response
          if (res.status === 478 || res.status === 403) {
            NotificationError(res.data.msg)
           
          } else if (res.status === 400) {
            NotificationError(res.data.error_description)
           
          } else if (res.status === 202) { //三方未绑定
            this.$router.push({
              path: '/'
            })
          } else if (res.status === 401) {
            if (cfg.url == "AT_token") {
              NotificationError(res.data.msg)
             
            }else{
              NotificationError( res.data.message.split(": ")[1])
              
            }
          } else {
            NotificationError('网络繁忙，请稍后再试！');
          }
          reject(error)
        }
      ).catch((err) => {
        reject(err)
      })
    })
  }
  window.$xh = new XH();
})(window, document)
