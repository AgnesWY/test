<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            srcList: [
                    'https://webapi.amap.com/maps?v=1.4.10&key=25222652775a3534a85052c1db4e2e43',
                    'https://webapi.amap.com/ui/1.0/main.js?v=1.0.11',
                    // './static/video/ezuikit.js'
                ],
        }
    },
    created() {
        window.goBack = () => {
            let path = this.$router.currentRoute.path;
            if (
                path === "/equipmentInspection" ||
                path === "/addEquipPre" ||
                path === "/existEquipList"
            ) {
                this.$JSbridging.goBack();
            } else {
                this.$router.go(-1);
            }
        };
        window.getScanQRCode = (str, data) => {
            this.$store.commit("SET_QrCode", {
                qrcode: str,
                data: data
            });
        };
        window.getUploadImgUrl = (str, data) => {
            this.$store.commit("SET_UploadImgUrl", {
                url: str,
                data: data
            });
        };
        // 提供给app的方法--调用存储NFCID
        window.getNFCId = (str, data) => {
            this.$store.commit("SET_nfcId", {
                url: str,
                data: data
            });
        };
        window.getIsSupportNfc = (str, data) => {
            this.$store.commit("SET_supportNfc", {
                url: str,
                data: data
            });
        };
        // window.getScanQRCode()=(taskId,qrString)=>{

        // }
        window.addEventListener("resize", function() {
            if (
                document.activeElement.tagName === "INPUT" ||
                document.activeElement.tagName === "TEXTAREA"
            ) {
                document.activeElement.scrollIntoView({ behavior: "smooth" });
            }
        });
        if (!localStorage.loginFailTimes) {
            window.localStorage.setItem("loginFailTimes", 0);
        }
    },
    mounted() {
        // 每次刷新页面重新调用权限标识
        if (localStorage.getItem("token")) {
            $http({
                type: "get",
                url: "MY-getPermission"
            })
            .then(res => {
                // this.$store.commit("SET_PERMISSIONS", res.data);
            })
            .catch(() => {
                
            });
        }
        this.getwx(); //调用微信接口准备
        this.srcList.forEach(item=>{
            this.getJS(item);
        })
    },
    methods: {
        //动态获取js脚本
        getJS(src){
            let script = document.createElement('script');
            script.type="text/javascript";
            script.src = src;
            document.getElementsByTagName('head')[0].appendChild(script);
        },
        getwx() {
            let pageurl = location.href.split("#")[0];
            $http({
                type: "get",
                url: "WX_token",
                params: { url: pageurl }
            })
            .then(data => {
                let params = JSON.parse(data.data);
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: params.appId, // 必填，公众号的唯一标识
                    timestamp: params.timestamp, // 必填，生成签名的时间戳
                    nonceStr: params.nonceStr, // 必填，生成签名的随机串
                    signature: params.signature, // 必填，签名
                    jsApiList: [
                    "scanQRCode", //摄像头
                    "chooseImage", //拍照选相册
                    "uploadImage", //上传
                    "getLocalImgData", //本地回显照片
                    "startHCE", //检查手机是否支持NFC
                    "onHCEMessage" //监听接收 NFC 设备消息事件
                    ] // 必填，需要使用的JS接口列表
                });
                console.log("微信配置成功");
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                })
            .catch(data => {

            });
        }
    }
};
</script>

<style>

</style>
