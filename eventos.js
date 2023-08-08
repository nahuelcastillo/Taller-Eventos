const divFun = document.getElementById("fundiv")
const buttonfun = document.getElementById("buttonhi")

buttonfun.addEventListener("click", function(event){
    event.stopPropagation();
    alert("Hola!")
})

divFun.addEventListener("click", function(event){
    
    alert("Hola! Soy el div")
})