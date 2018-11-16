import join from'lodash/join'
import printMe from './print.js'
function component() {
    var element=document.createElement('div')
    var btn=document.createElement('button')
    element.innerHTML=join(['Hello','webpack'],' ')
    btn.innerHTML='Click me and check the console'
    btn.onclick=printMe
    element.appendChild(btn)
    return element
}
document.body.appendChild(component())
