import axios from "axios";
import apis from "../api/Apis";
import {
  getToken
} from '@/utils/auth';
import {
  Toast
} from 'cube-ui';
!(function (win, doc) {
  //系统http请求实例封装
  function XHsHttp() {}
  XHsHttp.prototype.http = function (cfg) {
    return new Promise(function (resolve, reject) {
      let headers = {
        systype: "app",
        version: "1.0.4"
      }
      // 让每个请求携带token--["X-Token"]为自定义key 请根据实际情况自行修改
      if (localStorage.token) {
        headers["Authorization"] = "Bearer " + localStorage.token;
      }
      //自传header
      if (cfg.header)headers = Object.assign(headers, cfg.header);
      if(cfg.url === "CU_upload2"){ //文件流上传
        headers["Content-Type"] = "multipart/form-data";
      }
      //参数拼接在url后面
      let url = "";
      if (cfg.isurlparam) {
        url = apis[cfg.url] + "/" + cfg.params;
        cfg.params = {}
      } else {
        url = apis[cfg.url]
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
      if (cfg.params)
        hconfig.params = cfg.params || {}
      if (cfg.data)
        hconfig.data = cfg.data || {}
      service(hconfig).then(response => {
        // 请求成功 业务逻辑判断
          const res = response.data
          if (res.code && res.code !== 200) {
            const toast = Toast.$create({
              txt: res.msg,
              type: "error"
            });
            toast.show();
            reject(res)
          }
          resolve(res)
        },
        error => {
          // 请求没有成功
          const res = error.response
          if (res.status === 478 || res.status === 403) {
            Toast.$create({
              time: 1500,
              txt: res.data.msg,
              type: "error"
            }).show();
          } else if (res.status === 400) {
            Toast.$create({
              time: 1500,
              txt: res.data.error_description,
              type: "error"
            }).show();
          } else if (res.status === 202) { //三方未绑定
          } else if (res.status === 401) { //token失效
            if (cfg.url == "AT_token") {
              Toast.$create({
                time: 1500,
                txt: "账套号或者用户名错误！",
                type: "error"
              }).show();

            } else {
              if(cfg.url == 'MQTT-topic'){
                return;
              }
              console.log("token失效");
              localStorage.removeItem("token");
              this.$commonFun.clearinfo(); //清除浏览器记录
              //  清除vuex中保存的各种值
              this.$store.commit("clearUserAll");
              this.$store.commit("clearpostequip");
              this.$store.commit("clearMqtt");
              $mqtt.end(); //结束mqtt
              this.$router.replace("/");
            }

          } else {
            Toast.$create({
              time: 1500,
              txt: "网络繁忙，请稍后再试！",
              type: "error"
            }).show();
          }
          reject(error)
        }
      ).catch((err) => {
        reject(err)
      })
    })
  }
  win.$http = new XHsHttp().http;
})(window, document)
