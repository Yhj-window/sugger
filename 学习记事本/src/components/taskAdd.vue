<template>
  <div id="task-add">
      <input type="text" v-model="content" @keyup.enter="add" placeholder="备忘录">
      <button :style="{background:$store.state.backColor}" @click="add">提交</button>
  </div>
</template>

<script>
export default {
    name:"",
    data(){
        return{
            content:''
        }
    },
    created(){},
    methods:{
        add(){
            if(this.content == ''){
                alert('请输入内容后再添加！！！')
                return false
            }else{
                let obj = {
                    content:this.content,
                    status:1,
                    id:new Date().getTime(),
                    check:false
                }
                this.$store.commit('addTask', obj)
                this.content = ''
            }
        }
    }

}
</script>

<style lang="scss" scoped>
#task-add{
    text-align: center;
    height: 80px;
    padding-top: 20px;
    input{
        width: 250px;
        height: 40px;
        border: 1px solid #999;
        vertical-align: middle;
        margin-right: 10px;
        border-radius: 6px;
        padding-left: 10px;
        font-size: 20px;
    }
    input::placeholder{
        font-size: 20px;
    }
    button{
        width: 70px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border: none;
        vertical-align: middle;
        font-size: 20px;
        color: #fff;
        border-radius: 6px;
    }
}

</style>