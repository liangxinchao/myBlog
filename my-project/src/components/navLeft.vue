<template>
  <div class="navLeft">
    <el-menu
      :default-active="routerpath"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      unique-opened
      router
    >
     <template v-for="nav in $router.options.routes" v-if="!nav.hidden">
     <template v-for="item in nav.children" v-if="!item.hidden">
       <el-submenu :index="item.path" v-if="!item.leaf">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item :index="nav.path+'/'+item.path+'/'+child.path"  v-for="child in item.children" v-if="!child.hidden">{{child.name}}</el-menu-item>
      </el-submenu>
     </template>

    </template>
  </el-menu>
  <div class="rightContent">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'navLeft',
  data () {
    return {
      routerpath:''
    }
  },
  methods: {
    getRouterpath(){
        let nowpathArr = this.$route.path.split('/');
        let newpathArr = [];
        for(let i = 0; i < 4; i++){
          newpathArr.push(nowpathArr[i]);
        }
        this.routerpath = newpathArr.join('/');
        console.log(this.routerpath)
      },
  },
  mounted() {
    this.getRouterpath()
  }
}
</script>


<style scoped>
.navLeft{
  width:100%;
  height: 100%;
}
.el-menu-vertical-demo{
  width:200px;
  float:left;
  position:absolute;
  bottom:0;
  top: 0
}
.rightContent{float:left; margin-left:200px}
</style>
