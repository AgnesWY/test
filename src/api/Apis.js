// app
// let appIp =`http://192.168.31.81:9999`;
// web 公众号
// let appIp = "https://m.houduniot.com"
let appIp = "";
let _AUTH = `${appIp}/auth/`;
let _XG = `${appIp}/xg/`;
let _ADMIN = `${appIp}/admin/`;
let _CMS = `${appIp}/cms/`;
let _MC = `${appIp}/mc/`;
let _CK = `${appIp}/check/`;


const apis = {
  
  //  注册
  "appRegistered": `${_ADMIN}common/appRegistered`,
  // 客户登录
  "AT_token": `${_AUTH}oauth/token`,
  // 手机登录
  'AT_Mobiletoken': `${_AUTH}mobile/token`,
  // 获取手机验证码
  "phone_CMSCode": `${_ADMIN}common/quickLogin/CMSCode`,
  // 微信登录
  "WX_loginuser": `${_AUTH}api/v1/third/weixin/login/user`,
  // 微信绑定
  "WX-binduser": `${_AUTH}api/v1/third/weixin/bind/user`,
  // 微信解除绑定
  "WX-unbinduser": `${_ADMIN}tp/login/weixin/unBindUser/user`,
  // 判断微信是否绑定并返回绑定用户的信息
  "WX-checkUser": `${_ADMIN}tp/login/weixin/checkUser`,
  // 退出登录
  "AT_removeToken": `${_AUTH}authentication/removeToken`,
  // 获取城市
  "CM-city": `${_ADMIN}common/city`,
  // 忘记密码
  "FG_password": `${_ADMIN}common/forget/password`,
  // 上传文件
  "CU_upload": `${_ADMIN}common/uploadStr`,
  // 上传文件2
  "CU_upload2": `${_ADMIN}common/upload`,
  // 验证码
  "AD_code": `${_ADMIN}code/`,
  // mqtt获取topic
  "MQTT-topic": `${_ADMIN}app/topic`,
  // 微信配置摄像头等
  "WX_token": `${_AUTH}auth/third/weixin/sign`,



  /* 模块--首页 */
  // 首页模块的接口都分布在‘我的’和‘应用’模块
  // 新闻banner
  "APN_banner": `${_CMS}news/banner`,
  // 故障报警数统计
  "APN_statistics": `${_XG}appXgStatusStatistics/statistics/part`,
  // echart七日事件统计
  "APN_warnEventSetBook": `${_XG}appXgStatusStatistics/business/statistics/warnEventSetBook`,

  /* 模块--我的 */
  // 获取用名头像昵称详情
  "MY-info": `${_ADMIN}user/info`,
  // 权限标识
  "MY-getPermission": `${_ADMIN}user/getPermission`,
  // 账户列表
  "MY-uselist": `${_ADMIN}user/correlation/list`,
  // 关联用户
  "AT_correlation": `${_AUTH}auth/user/correlation`,
  // 删除关联
  "AT_cancelConction": `${_ADMIN}user/cancel/correlation`,
  // 切换账户
  "AT_change": `${_AUTH}auth/user/change`,
  // 账套详情
  "AT_enterprise": `${_ADMIN}app/enterprise`,
  // 获取用户电话、短信权限
  "MY_rights": `${_ADMIN}/user/phoneConfig`,
  // 修改电话权限
  "Edit_phoneStatus": `${_ADMIN}/business/phoneStatus`,
  // 修改短信权限
  "Edit_smsStatus": `${_ADMIN}/business/sMsStatus`,
  // 修改帐号密码
  "AT_editPassword": `${_ADMIN}user/editPassword`,



  // 修改用户名头像昵称
  "MY-editSysUser": `${_ADMIN}user/editSysUser`,
  // 获取我的家庭/房间列表
  "MYF_positions": `${_XG}family/positions`,
  // 获取家庭/房间详情 参数id拼接在url
  "MYF_info": `${_XG}family/info`,
  // 新增家庭/房间
  "MYF_addposition": `${_XG}family/add/position`,
  // 修改家庭/房间
  "MYF_updateposition": `${_XG}family/update/position`,
  // 批量删除、删除家庭/房间
  "MYF_delposition": `${_XG}family/del/position`,
  // 获取成员列表
  "MYM-selectAppUser": `${_ADMIN}user/selectAppUser`,
  // 新增成员
  "MYM-addAppUser": `${_ADMIN}user/addAppUser`,
  // 修改成员
  "MYM-updateAppUserByUserId": `${_ADMIN}user/updateAppUserByUserId`,
  // 删除成员
  "MYM-deleteAppUserByUserId": `${_ADMIN}user/deleteAppUserByUserId`,
  // 获取成员详情
  // 意见反馈
  "MY-sysFeedback": `${_ADMIN}sysFeedback`,

  /*模块--应用  */
  //地址管理---tree
  'CP_positions': `${_XG}install/footPositions`,
  // 新增地址
  'CP_position': `${_XG}install/position`,
  // 查询摄像头安装列表
  "APC_list": `${_XG}camera/device/list`,

  // 家庭设备联动详情图（点列表中图片跳转） 参数id拼接在url后面
  "APC_info": `${_XG}camera/info`,
  // 新增摄像头
  "APC_device": `${_XG}camera/device`,
  // 删除摄像头
  "APC_del": `${_XG}camera/device/del`,
  // 查询摄像头已联动设备（解绑按钮）
  "APC_correlationlist": `${_XG}camera/correlation/cancel/list`,
  // 查询摄像头未联动（绑定按钮）
  "APC_cancellist": `${_XG}camera/correlation/list`,
  // 删除摄像头联动
  "APC_cancel": `${_XG}camera/correlation/cancel`,
  // 添加摄像头联动
  "APC_correlation": `${_XG}camera/correlation`,
  // 新闻列表
  "APN_list": `${_CMS}news/article/list`,
  // 新闻详情 参数id拼接在url后面
  "APN_detail": `${_CMS}news/article`,
  // 安全体检
  "AP_safety": `${_XG}safety/setBookId`,
  // 历史数据
  "AP_getEventLog": `${_XG}webDeviceAndPart/getEventLog`,
  // 获取设备（网关）列表
  "APG_pageApp": `${_XG}xgGateway/pageApp`,
  // 设备详情 参数deviceId拼接在url后面
  "APG_info": `${_XG}xgGateway/device/info`,
  // 三相详情的对象
  "APG_partinfo": `${_XG}xgGateway/device/part`,
  //三相设备模拟量
  'XG-simulation': `${_XG}history/part/simulation`,
  // 通用详情部件模拟量走势图
  'GW_simulation': `${_XG}appXgStatusStatistics/statistics/simulation`,
  //检测对象类型
  'SYS-checkedType': `${_XG}webDeviceAndPart/checkedType`,
  // 消音
  "APG_slince": `${_XG}command/slince`,
  // 复位
  "APG_reset": `${_XG}command/reset`,
  // 更新部件
  "APG_sendCmd": `${_XG}command/sendCmd`,
  // 删除设备（网关） 参数ids拼接在url上
  "APG_del": `${_XG}xgGateway/del`,
  // 新增设备（网关）
  "APG_Add": `${_XG}xgGateway/add`,
  // 编辑设备（网关）
  "APG_xgEdit": `${_XG}xgGateway/edit`,
  // 修改摄像头
  "APG_xgEditCamera": `${_XG}camera/device/update`,
  // 设备系统类型
  "APG_deviceType": `${_XG}xgGateway/deviceType/setBookId`,
   //设备变更列表
   'GW_changeDevice': `${_XG}webDeviceAndPart/changeDevice`,
   //确认设备变更
   'GW_submitChangeDevice': `${_XG}webDeviceAndPart/submitChangeDevice`,
   //部件变更
   'GW_changePart': `${_XG}webDeviceAndPart/changePart`,
   //确认部件变更
   'GW_submitChangePart': `${_XG}webDeviceAndPart/submitChangePart`,
   //设备部件详情中模拟量参数请求
   'XG_checkedType':`${_XG}webDeviceAndPart/checkedType`,

  // .................................................................................................................................
  //事件报警TOP5
  "APG_eventTop": `${_XG}appXgStatusStatistics/device/statistics/eventTop`,
  //获取报警故障统计
  "APG_eventAll": `${_XG}appXgStatusStatistics/statistics/warnAndBreak`,
  //获取首页实时消息
  "AMC_listNotRead": `${_MC}msg/listNotRead`,
  //添加账套 修改帐套 删除账套 回显帐套信息
  "ADD_business": `${_ADMIN}business/sysEnterprise`,
  //经销商查询所有子账套信息
  "JQA_myChild": `${_ADMIN}app/myChildrenEnterpriseStatus`,
  // 经销商历史告警客户列表
  "JQA_enterpriseUserName": `${_ADMIN}business/enterpriseUserName`,
  // 通用详情查询
  "APN_detailAll": `${_XG}appXgStatusStatistics/partPage`,
  // 消息已读
  "APG_readOne": `${_MC}msg/read`,
  // 全部已读
  "APG_readAll": `${_MC}msg/readAll`,
  // 帐套分组查询
  "APG_setBook": `${_MC}msg/setBook`,
  // 经销商报警故障 未读等信息
  "APG_statistics": `${_XG}appXgStatusStatistics/agen/statistics`,
  // 客户等信息
  "APG_agencyDevice": `${_XG}appXgStatusStatistics/agen/statistics/agencyDevice`,
  // 获取客户总数
  "ADD_topSetbookNum": `${_ADMIN}business/topSetbookNum`,
  // top
  "APG_setBookIdEventTop": `${_XG}appXgStatusStatistics/statistics/setBookIdEventTop`,
  // 水系统模拟量
  // "APG_simulation": `${_XG}appXgStatusStatistics/statistics/simulation`,
  "APG_simulation": `${_XG}history/part/simulation`,
  
  // 巡检.................................................................................................................................
  //添加设备---查询设备类型列表
  "CK_equipmentList": `${_CK}api/v1/deviceType/list`,
  //添加设备---查询设备组(不分页)
  "CK_listNoPage": `${_CK}api/v1/deviceGroup/listNoPage`,
  //添加设备---查询设备模板（不分页）
  "CK_DevlistNoPage": `${_CK}api/v1/deviceTemplate/listNoPage`,
  //添加设备---根据模板id查询设备模板
  "CK_TemInfo": `${_CK}api/v1/deviceTemplate/info`,
  //添加设备---新增设备
  "CK_addDevice": `${_CK}api/v1/device`,
  //添加设备---app统计设备数量
  "CK_deviceCount": `${_CK}api/v1/device/deviceCount`,
  //添加设备---条件查询设备
  "CK_deviceList": `${_CK}api/v1/device/list`,
  //添加设备---条件查询接口
  "CK_deviceAppList": `${_CK}api/v1/device/appList`,
  //添加设备---根据设备id删除设备
  "CK_deviceDel": `${_CK}api/v1/device`,
  //编辑设备---根据设备id回显设备信息
  "CK_deviceInfo": `${_CK}api/v1/device/info`,
  
  //标签列表
  "CK_deviceTipsList": `${_CK}api/v1/deviceTips/list`,
  //新增标签
  "CK_addDeviceTips": `${_CK}api/v1/deviceTips/addDeviceTips`,
  //提交巡检记录
  "CK_subRecord": `${_CK}api/v1/task/subRecord`,

  //安全巡检---过期任务任务超时(超时任务数)
  "CK_timeOutTaskNum": `${_CK}api/v1/task/timeOutTaskNum`,
  //安全巡检---过期任务任务超时(时间计数)
  "CK_timeOutTaskList": `${_CK}api/v1/task/timeOutTaskList`,
  //安全巡检---App任务
  "CK_appList": `${_CK}api/v1/task/appList`,
  //安全巡检---未完成任务
  "CK_appListUnfinished":`${_CK}api/v1/task/appListUnfinished`,
  //安全巡检---已完成任务
  "CK_appListFinished":`${_CK}api/v1/task/appListFinished`,

  //安全巡检---App任务人员
  "CK_taskUsers": `${_CK}api/v1/task/users`,
  //安全巡检---App任务人员
  "CK_scrapUsers": `${_CK}api/v1/task/scrapUsers`,
  //安全巡检---App任务人员
  "CK_repairUsers": `${_CK}api/v1/task/repairUsers`,

  //安全巡检---任务设备(详情)
  "CK_taskDevices": `${_CK}api/v1/device/taskDevice`,
  //安全巡检---巡检详情(详情)
  "CK_checkInfo": `${_CK}api/v1/repair/check/info`,
   //二维码回显设备信息
   "CK_startInspection": `${_CK}api/v1/task/startInspection`,
  //  获取题目
  "CK_subjectList": `${_CK}api/v1/subject/subjectList`,
  //  提交巡检项答案
  "CK_submitSubject": `${_CK}api/v1/subject/submitSubject`,
  // 发起维修
  "CK_repair": `${_CK}api/v1/repair`,
  // 维修报废
  "CK_scrap": `${_CK}api/v1/repair/scrap`,
  // 巡检报废
  "CK_taskScrap": `${_CK}api/v1/task/scrap`,

  // 开始维修---获取维修详情
  "CK_startRepair": `${_CK}api/v1/repair/startOrder`,
  // 提交完成维修
  "CK_finishRepair": `${_CK}api/v1/repair/finishOrder`,

  
  //维修设备---查询维修设备列表
  "CK_repairAppList": `${_CK}api/v1/repair/appList`,
  //维修设备---完成设备维修
  "CK_repairFinishOrder": `${_CK}api/v1/repair/finishOrder`,
  //维修设备---设备信息
  "CK_repairInfo": `${_CK}aapi/v1/repair/info`,
  //维修设备---维修记录详情
  "CK_repairInfoList": `${_CK}api/v1/repair/infoList`,
  //维修设备---订单详情
  "CK_repairOrderId": `${_CK}/api/v1/repair/order`,
  //维修设备---超时订单数
  "CK_repairTimeOutTaskNum": `${_CK}api/v1/repair/timeOutTaskNum`,
  //维修设备---维修人员
  "CK_repairUserInfo": `${_CK}api/v1/repair/userInfo`,

  //过期任务 --- 设备列表
  "CK_timeOutDevice": `${_CK}api/v1/task/device`,
  //过期任务 --- 任务列表
  "CK_listExpired": `${_CK}api/v1/task/listExpired`,

  //已完成任务 --- 巡检任务设备列表
  "CK_finishedList": `${_CK}api/v1/task/deviceFinished`,
  //已完成任务 --- 巡检任务设备详情
  "CK_finishedDeviceDetail": `${_CK}api/v1/task/deviceDetail`,
  //已完成任务 --- 报废任务详情
  "CK_finishedScrapDetail": `${_CK}api/v1/task/scrapDetail`,
  //已完成任务 --- 维修任务详情
  "CK_finishedRepairDetail": `${_CK}api/v1/repair/detail`,

  //查询已有设备
  'CHECK_pageCheckDevice': `${_XG}xgGateway/pageCheckDevice`,
  //用户已有设备的设备类型
  'XG_havedDeviceType':`${_XG}xgGateway/deviceTypeCode`,
  //增加已有设备
  "CK_addExistDevice": `${_CK}api/v1/device/addExistDevice`,

  




}

export default apis;
