import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
routes:Routes,
mode:'history'
});

//filters globally
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// });
Vue.filter('snippet', function(value){
    return value.slice(0,100) + '.....';
});
//custom directives globally
// Vue.directive('rainbow',{
//   bind(el){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });
Vue.directive('theme',{
  bind(el,binding){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    } 
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});
export const bus = new Vue();
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router: router
})
