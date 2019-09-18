<!-- 没有头部布局 auth:wpp-->
<template>
  <div class="cube-page">
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["mqttinfo"])
  },
  created() {
    this.mqttConfig();
  },
  methods: {
    // MQTT
    //mqtt初始化
    mqttConfig() {
      //60环境
      // let config = {
      //   hostUrl: "ws://192.168.31.62",
      //   port: 9001
      // };
      // 云环境
      let config = {
        hostUrl: "wss://emqttd.houduniot.com:8084/mqtt",
        username: "admin",
        password: "xhs-emqttd-20180818"
      };
      $mqtt.start(config, mqt => {
        this.pushData();
        //报警信息 接受初始化
        $mqtt.AlarmMessage = this.pushDataHandle;
      });
    },
    //订阅报警信息
    pushData() {
      let that = this;
      $http({
        type: "get",
        url: "MQTT-topic"
      })
        .then(res => {
          // 订阅主题
          let topicData = res.data;
          $mqtt.subscribe(topicData);
        })
        .catch(() => {});
    },
    //mqtt 接受数据，根据类型 判断推送目标
    pushDataHandle(msg) {
      let _self = this;

      // this.$store.commit('SET_mqttinfo',"")

      setTimeout(() => {
        switch (msg.type) {
          case "00":
            if (
              !msg.info[0].recovery &&
              (msg.info[0].status == 1 || msg.info[0].status == 2)
            ) {
              _self.$store.commit("SET_mqttinfo", msg);
            }
            // console.log(_self.mqttinfo);

            break;
        }
      }, 10);
    }
  }
};
</script>

<style lang="stylus" scoped>
.cube-page {
  .wrapper {
    height: 100%;
  }
}
</style>
