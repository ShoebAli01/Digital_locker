function demo()

{
var d= new Date()
document.querySelector("div").innerText=d.toLocaleTimeString()
setTimeout(demo,1000)

}