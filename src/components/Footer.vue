<template>
<footer>
    <p>{{ copyright }}</p>
</footer>
</template>

<script>

import {bus} from '../main.js';

export default {
 
   data() {
     return {
        copyright: 'Copyright 2020 Vue Ninjas'
     }
  },
  created (){
      bus.$on('titleChanged',(data)=>{
          this.title = data;
      })
  }
}
</script>

<style scoped>

footer{
    background: #222;
    padding: 6px;
}
p{
    color: lightgreen;
    text-align: center;
}

</style>
