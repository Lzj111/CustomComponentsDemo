<template>
  <div class="hello">
    <h3>你好啊</h3>
    <component :is="componentName" />
  </div>
</template>
<script>
import comm from "./comm.vue"
export default {
  name: 'HelloWorld',
  components: {
    comm
  },
  props: {
    msg: String
  }
  , 
   async mounted() {
  },
  data () {
    return {
      componentName:"comm"
    }
  }
}
</script>
<style scoped>
.hello {
  width: 300px;
  height: 200px;
  border: 1px solid pink;
}
img {
  height: 100px;
}
</style>
