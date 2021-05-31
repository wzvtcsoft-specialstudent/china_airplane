export default{
    state:{
       com3:{}
    },
    mutations:{
        setcom3(state,user){
            state.com3=user      
        },
    },
    actions:{},
    getters:{
      getcom3(state){
        return state.com3
      }
    },
    namespaced:true
}