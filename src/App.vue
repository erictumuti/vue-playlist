<template>

 <div>
   <app-header></app-header>
   <router-view>
<add-blog></add-blog>
<show-blogs></show-blogs>
<list-blogs></list-blogs>
   </router-view>

 </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';

export default {
  components:{
    'add-blog':addBlog,
    'show-blogs':showBlog,
    'list-blogs':listBlogs,
    'app-header':header

  },
  data() {
    return{
  
    }
  }
}

</script>
<style scoped>

 </style> 
