// production
// import Vue from 'vue/dist/vue.min.js'
// development
import Vue from 'vue/dist/vue.js'

import HelloWorld from './components/HelloWorld.vue'

console.log('hello ')
// document.addEventListener("DOMContentLoaded", function() {
console.log('dom loaded')
var app = new Vue({
    el: '#app',
    components: {
        'just-a-test': HelloWorld,
    },
    delimiters: ['[[', ']]'],
    data: {
        message: 'Hello Vue!'
    },
})
// })