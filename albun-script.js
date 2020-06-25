
var thumbnails = document.getElementsByClassName("img-thumbnail");

var img = document.getElementById('img-window')

for(var i = 0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(event){
        img.innerHTML = this.innerHTML
        img.setAttribute('data-img-id', this.id)
        img.setAttribute('class', '')
    })
}

img.addEventListener('click', function(event){
    this.innerHTML = ''
    this.setAttribute('data-img-id', '')
    this.setAttribute('class', 'invisible')
})