<template>
  <div>
      <div>
          <h3 :style="{background:$store.state.backColor}" @click="toggleList('working')">
              <span>未完成</span>
              <i class="iconfont icondown" :class="type == 'working' ? 'down' : 'up' "></i>
          </h3>
          <transition name="slide">
              <ul v-show="toggleWorking">
                  <li v-for="item in teskList" :key="item.id">
                      <div class="working-box" v-show="item.status === 1 ">
                          <div>
                              <input type="checkbox" v-model="item.check" @click="changeStatus(item,2)">
                              <span>{{item.content}}</span>
                          </div>
                          <button @click="changeStatus(item,3)">取消</button>
                      </div>
                  </li>
              </ul>
          </transition>
      </div>
      <div>
          <h3 :style="{background:$store.state.backColor}" @click="toggleList('finish')">
              <span>已完成</span>
              <i class="iconfont icondown" :class="type == 'finish' ? 'down' : 'up' "></i>
          </h3>
          <transition name="slide">
              <ul v-show="toggleFinish">
                  <li v-for="item in taskList" :key="item.id">
                      <div class="working-box" v-show="item.status === 2 ">
                          <div>
                              <input type="checkbox" v-model="item.check" @click="changeStatus(item,1)">
                              <span>{{item.content}}</span>
                          </div>
                          <span>{{new Date() | formatter}}</span>
                      </div>
                  </li>
              </ul>
          </transition>
      </div>
      <div>
          <h3 :style="{background:$store.state.backColor}" @click="toggleList('cancel')">
              <span>已取消</span>
              <i class="iconfont icondown" :class="type == 'cancel' ? 'down' : 'up' "></i>
          </h3>
          <transition name="slide">
              <ul v-show="toggleCancel">
                  <li v-for="item in taskList" :key="item.id">
                      <div class="working-box cancel-box" v-show="item.status === 3">
                          <div>
                              <span>{{item.content}}</span>
                          </div>
                          <button @click="changeStatus(item,1)">恢复</button>
                      </div>
                  </li>
              </ul>
          </transition>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'',
    data(){        
        return{
            type:'',
            toggleWorking:false,
            toggleFinish:false,
            toggleCancel:false,
        }
    },
    computed:{
        ...mapState([
            'taskList'
        ])
    },
    filters:{
        formatter(val){
            let date = new Date(val)
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            return `${year}-${month}-${day}`
        }
    },
    methods:{
        toggleList(type){
            this.type = this.type == '' ? type: ''
            switch(type){
                case 'working':
                    this.toggleWorking = !this.toggleWorking
                break;
                case 'finish':
                    this.toggleFinish = !this.toggleFinish
                break;
                case 'cancel':
                    this.toggleCancel = !this.toggleCancel
                break;
            }
        },
        changeStatus(item,status){
            if(status === 2){
                item.check = true
            }else if(status === 1){
                item.check = false
            }
            item.status = status
        }
    },
    watch:{
        taskList(){
            this.toggleWorking = true
        }
    }

}
</script>

<style lang="scss" scoped>
h3{
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    color: #fff;
    i{
        transition: all .5s;
    }

    .down{
        transform: rotate(0);
    }
    .up{
        transform: rotate(-90deg);
    }
}

ul{
    height: 150px;
    overflow: auto;
    border: 1px solid #ccc;
    li{
        font-size: 20px;
        .working-box{
            display: flex;
            height: 50px;
            align-items: center;
            justify-content: space-between;
            span{
                color: #ccc;
                font-size: 14px;
                margin-right: 10px;
            }
            div{
                span{
                    color: #333;
                    font-size: 20px;
                }
            }
        }
        .cancel-box{
            padding-left: 10px;
        }
        input{
            height: 20px;
            width: 20px;
            margin-right: 20px;
            vertical-align: middle;
        }
        span{
            vertical-align: middle;
        }
        button{
            border: 1px solid #ccc;
            padding: 5px 15px;
            margin-right: 20px;
            border-radius: 4px;
        }
    }
}

.slide-enter-active, .slide-leave-active{
    transition:  all .5s;
}
.slide-enter, .slide-leave-to{
    height: 0;
    opacity: 0;
}

</style>