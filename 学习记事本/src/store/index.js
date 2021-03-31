import Vue from 'vue'
import Vuex from 'vuex'
import vp from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backColor:'#f39a96',
    toggleMask:false,
    taskList:[]
  },
  mutations: {
    changeMask(state){
      state.toggleMask = !state.toggleMask
    },
    changeBackColor(state,value){
      state.backColor = value
    },
    addTask(state,value){
      state.taskList.push(value)
    },
    changeTaskStatus(state,i){
      state.taskList[i].status = 2
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[vp()]
})
