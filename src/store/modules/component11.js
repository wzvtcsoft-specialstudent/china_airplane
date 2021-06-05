export default{
    state:{
       month:[],
       number:[]
    },
    mutations:{
        setmonth(state,user){
            state.month=user      
        },
        setnumber(state,user){
            state.number=user 
        }
    },
    actions:{},
    getters:{
    },
    namespaced:true
}