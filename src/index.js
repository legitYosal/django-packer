import Vue from 'vue'
import App from './App.vue'
import './scss/style.scss'

console.log('hello ')
window.addEventListener('load', function () {
    const VueApp = new Vue({
      el: '#app',
      render: h => h(App),
    })
})