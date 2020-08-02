
function component() {
    const element = document.createElement('div')
    element.innerHTML = 'hamed is cool'
    return element
}
document.body.appendChild(component())