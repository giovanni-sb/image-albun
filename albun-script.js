
var thumbnails = document.getElementsByClassName("img-thumbnail");

var img = document.getElementById('img-window')

var btns = img.innerHTML;


function goToImg(imgId){
    var thumb = thumbnails[imgId]
    if(thumb != undefined){
        img.innerHTML = thumb.innerHTML+btns
        img.setAttribute('data-img-id', thumb.id)
        img.setAttribute('class', '')
        addBtns()
    }
    
}

for(var i = 0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(event){
        img.innerHTML = this.innerHTML+btns
        img.setAttribute('data-img-id', this.id)
        img.setAttribute('class', '')
        addBtns()
    })
}

function addBtns(){
    document.getElementById('previous-btn').addEventListener('click', function(event){
        console.log("anterior")
        var imgId = img.getAttribute('data-img-id')
        if(imgId != ''){
            var prev = parseInt(imgId)-1
            if(prev >= 0){
                goToImg(prev)
            }
        }
    })
    document.getElementById('next-btn').addEventListener('click', function(event){
        var imgId = img.getAttribute('data-img-id')
        if(imgId != ''){
            var next = parseInt(imgId)+1
            goToImg(next)
        }
    })
}

img.addEventListener('click', function(event){
    this.innerHTML = ''+btns
    this.setAttribute('data-img-id', '')
    this.setAttribute('class', 'invisible')
    addBtns()
})