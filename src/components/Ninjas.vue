<template>
<div id="ninjas">
    <ul>
        <li v-for="ninja in ninjas" :key="ninja" v-on:click="ninja.show=!ninja.show">
            <h2>{{ ninja.name }}</h2>
            <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
        </li>
    </ul>
</div>
</template>

<script>

export default {
 
   data() {
     return {
        ninjas:[
            {name:'Timmy', speciality:'Web Designer', show:false},
            {name:'Charles', speciality:'cooperative student', show:false},
            {name:'Derro', speciality:'Drunkard', show:false},
            {name:'Joe', speciality:'smoking weed', show:false},
            {name:'Grace', speciality:'seller on etsy', show:false},
            {name:'Nancie', speciality:'manager', show:false}
        ]
     }
  }
}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}


</style>
