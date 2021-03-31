<template>
  <div id="task-header" :style="{background:$store.state.backColor}">
      <h2>备忘录</h2>
      <i class="iconfont iconmenu" @click="showMask"></i>
  </div>
</template>

<script>
export default {
    name:'',
    data(){
        return{}
    },
    mounted(){},
    methods:{
        showMask(){
            this.$store.commit('changeMask')
        }
    }

}
</script>

<style lang="scss" scoped>
#task-header{
    height: 70px;
    color: #fff;
    width: 100%;
    position: relative;
    h2{
        line-height: 70px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
    i{
        position: absolute;
        top: 20px;
        right: 10px;
        font-size: 30px;
    }
}

</style>