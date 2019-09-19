//存储用户信息的js
const user ={
    state:{
        username:'',

    },
    mutations:{
        // 清空用户所有数据
        clearUserInfo(){
            state.username = '';
        },
        // 修改state里面的值
        // Action 提交的是 mutation，而不是直接变更状态。<br>
        // Action 可以包含任意异步操作(mutation里边是不能包含异步操作的，因为无法追踪状态改变)。
        // store.dispatch负责分发
        SET_username: (state,val)=>{
            state.username = val;

        }

    },
    actions:{
        //一些异步的method 包含了类似 commit(SET_username, data.newName)
        GetInfo({commit}){
            return new Promise((resolve, reject)=>{
                

            });

        }

    }


}
export default user