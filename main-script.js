var albuns = document.getElementsByClassName("albun-cover")
for(var i = 0; i<albuns.length; i++){
    albuns[i].addEventListener('click', function(event) {
        window.location = "./albun.html?id="+this.id
    })
}