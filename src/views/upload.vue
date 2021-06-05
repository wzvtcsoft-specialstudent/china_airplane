<template>
  <div id="app">
    <input
      class="wen"
      type="file"
      id="fileExport"
      @change="handleFileChange"
      ref="inputer"
    />
    <button class="load" @click="btnn">上传</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleFileChange(e) {
      let inputDOM = this.$refs.inputer;
      this.file = inputDOM.files[0]; // 通过DOM取文件数据
      let size = Math.floor(this.file.size / 1024); //计算文件的大小
      this.formData = new FormData(); //new一个formData事件
      this.formData.append("file", this.file); //将file属性添加到formData里 //此时formData就是我们要向后台传的参数了
    },
    btnn() {
      this.$http({
        URL: api.upload,
        data:formData,
        method:"post",
        headers:{
          'Content-Type':'multipart/form-data'
        }
      }).then(function(res){
        console.log(res,'回调成功');
      }.catch(function(req){
        console.log(req,'回调失败');
      })
      )
    }
  },
};
</script>

<style scoped>
#app {
  position: absolute;
  top: 8%;
  left: 3%;
  overflow: hidden;
}
.wen {
  position: relative;
  cursor: pointer;
  left: -69px;
  border: none;
  background-color: rgba(255, 255, 255, 0.11);
  color: rgb(194, 226, 255);
}
.wen:hover {
  background-color: rgba(255, 255, 255, 0.24);
}
.load {
  position: relative;
  left: -60px;
  border: 2px solid rgba(0, 56, 82, 0.74);
  background-color: rgba(195, 204, 255, 0.603);
  color: rgb(255, 255, 255);
  font-size: 8px;
  width: 40px;
  height: 26px;
}
.load:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.438);
}
</style>