
import _ from 'lodash'

import './css/style.css'
// import MyImage from './pictures/test.png'
import print_me from './print'


function component() {
    const element = document.createElement('div')
    element.innerHTML = 'hamed is cool'
    return element
}
document.body.appendChild(component())

var x = 323


console.log('hello-world')
console.log(_.join(['what', 'does', 'lodash', 'do?', ], ' '))

console.log(print_me())


console.log('wefwef')