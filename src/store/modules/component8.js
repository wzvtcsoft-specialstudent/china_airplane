export default{
    state:{
        dataOne_a:[],
        dataOne_b:[],
        dataOne_c_filter:[],
        /////////////////////////////////
        dataTwo_a:[],
        dataTwo_b:[],
        dataTwo_c_filter:[],
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
            state.dataOne_b=user      
        },
        setdataOne_c(state,user){
            state.dataOne_c_filter=user      
        },
        ///////////////////////////////////

        setdataTwo_a(state,user){
            state.dataTwo_a=user      
        },
        setdataTwo_b(state,user){
            state.dataTwo_b=user      
        },
        setdataTwo_c(state,user){
            state.dataTwo_c_filter=user      
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