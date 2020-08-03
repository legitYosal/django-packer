import Vue from 'vue'
import './scss/style.scss'

console.log('hello ')
document.addEventListener("DOMContentLoaded", function() {
    console.log('dom loaded')
    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      }
    })
})