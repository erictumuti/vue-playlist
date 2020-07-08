<template>
    
 <div id="add-blog">
 <h2>add a new blog post</h2>
 <form v-if="!submitted">
   <label for="title">Blog Title:</label>
   <input type="text" v-model.lazy="blog.title" required>
   <label for="content">Blog Content:</label>
   <textarea name="" v-model.lazy="blog.content" id="" cols="30" rows="10"></textarea>
   <div id="checkboxes">
      <label for="">Ninjas</label>
      <input type="checkbox" value="ninjas" v-model="blog.categories">
      <label for="">wizards</label>
      <input type="checkbox" value="wizards" v-model="blog.categories">
      <label for="">niggas</label>
      <input type="checkbox" value="niggas" v-model="blog.categories">
      <label for="">Nigros</label>
      <input type="checkbox" value="nigros" v-model="blog.categories">
   </div>
   <label for="">Author:</label>
   <select v-model="blog.author">
     <option v-for="author in authors" :key="author">{{ author }}</option>
   </select>
   <button v-on:click.prevent="post">Add Blog</button>
 </form>
 <div v-if="submitted">
   <h3>Thanks for adding your post</h3>
 </div>
 <div id="preview">
   <h3>Preview Blog</h3>
   <p>Blog Title: {{blog.title}}</p>
   <p>Blog Content:{{blog.content}}</p>
   <p>Blog categories:</p>
   <ul>
     <li v-for="category in blog.categories" :key="category">{{ category }}</li>
   </ul>
   <p>Author: {{ blog.author }}</p>
 </div>
 </div>
</template>

<script>

export default {
  components:{

  },
  data() {
    return{
      blog: {

      title:'',
      content:'',
      categories:[],
      author:''
      },
      authors:['The net Ninja','The stoners','walevi sacco'],
      submitted:false,
  
    }
  },
  methods: {
    post:function(){
      this.$http.post('https://vue-playlist-b3351.firebaseio.com/post.json',this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}

</script>
<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes label{
    display: inline-block;
}
 </style> 
