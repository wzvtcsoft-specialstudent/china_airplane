export default{
    state:{
        dataOne_a:[],
        dataOne_b_filter:[],
        dataOne_c:[],
        dataOne_d:[],
        /////////////////////////////////
        dataTwo_a:[],
        dataTwo_b:[],
        dataTwo_c:[],
        /////////////////////////////////
        dataFore:[],
        ////////////////////////////////
        linex:0,
        linexx:0,
        ///////////////
        nameOne:'',
        // nameTwo:''
    },
    mutations:{
        setdataOne_a(state,user){
            state.dataOne_a=user      
        },
        setdataOne_b(state,user){
            state.dataOne_b_filter=user      
        },
        setdataOne_c(state,user){
            state.dataOne_c=user      
        },
        setdataOne_d(state,user){
            state.dataOne_d=user      
        },
        ///////////////////////////////////

        setdataTwo_a(state,user){
            state.dataTwo_a=user      
        },
        setdataTwo_b(state,user){
            state.dataTwo_b=user      
        },
        setdataTwo_c(state,user){
            state.dataTwo_c=user      
        },
        ////////////////////////////
        
        setdataFore(state,user){
            state.dataFore=user      
        },
        setlinex(state,user){
            state.linex=user      
        },
        setlinexx(state,user){
            state.linexx=user      
        },
        ////////////////////////
        setnameOne(state,user){
            state.nameOne=user    
        },
        // setnameTwo(state,user){
        //     state.nameTwo='航班号'+user+'客座率'      
        // },
    },
    actions:{},
    getters:{
      getcom8(state){
        return state.com8
      }
    },
    namespaced:true
}