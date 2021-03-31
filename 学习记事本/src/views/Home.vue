<template>
  <div class="home">
    <taskHeader></taskHeader>
    <div class="container">
      <taskAdd></taskAdd>
      <taskList></taskList>
    </div>
    <transition name="slide">
      <taskMask v-show="$store.state.toggleMask"></taskMask>
    </transition>
  </div>
</template>

<script>
import taskAdd from '@/components/taskAdd'
import taskHeader from '@/components/taskHeader'
import taskList from '@/components/taskList'
import taskMask from '@/components/taskMask'
export default {
  name:"Home",
  components:{
    taskAdd,
    taskHeader,
    taskList,
    taskMask
  }

}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  position: relative;
}

.slide-enter-active, .slide-leave-active{
  transition: transform  .5s;
}

.slide-enter, .slide-leave-to{
  transform: translate(-100%);
}
.container{
  padding: 0 10px;
}

</style>