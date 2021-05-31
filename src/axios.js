import axios from 'axios'

export default{
    install:function(vue){
       var auth=vue.prototype.$auth
        //创建一个axios
       var result=axios.create({
        //    baseURL:'http://192.168.196.33:8080'
       })
    //添加一个请求拦截器去处理添加Authorization  
    //    result.interceptors.request.use(config=>{
    //        config.headers.Authorization=auth.getAuthorization()
    //        return config
    //    })
       vue.prototype.$http=result
    }
} 