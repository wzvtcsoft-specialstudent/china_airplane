export default{
    state:{
       com7:{},
       linex:0
    },
    mutations:{
        setcom7(state,user){
            state.com7=user      
        },
        setlinex(state,user){
          state.linex=user  
      },
    },
    actions:{},
    getters:{
      getcom7(state){
        return state.com7
      }
    },
    namespaced:true
}