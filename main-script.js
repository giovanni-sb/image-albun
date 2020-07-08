var id = '60417'
const api_url = 'https://projetofinal-ppw.herokuapp.com/api/'+id

var img = document.getElementById('img-window')

var btns = img.innerHTML;

var remove_btn = document.getElementById('remove-btn')

var box = document.getElementById('albun-box')

var data_requisition = fetch(api_url)

var form = document.getElementById('main-form')

var data = data_requisition.then(function(response){
    return response.json()
})

data.then(function(data){
    console.log(data)
    for(var id = 0; id<data.length; id++){
        console.log(data[id])
        var div = document.createElement('div')
        div.setAttribute('class', 'img-thumbnail')
        var img = document.createElement('img')
        img.id = id
        img.src = data[id].location
        img.alt = data[id].description
        div.appendChild(img)
        box.appendChild(div)
    }
}).then(function(){
    var thumbnails = document.getElementsByClassName("img-thumbnail")
    console.log(thumbnails)
    for(var i = 0; i<thumbnails.length; i++){
        thumbnails[i].addEventListener('click', function(event){
            img.innerHTML = this.innerHTML+btns
            img.setAttribute('data-img-id', this.id)
            img.setAttribute('class', '')
            addBtns()
        })
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('click')
    var url = document.getElementById('url-input')
    var alt = document.getElementById('alt-input')
    var extension = url.value.split(".").slice(-1)[0]
    console.log(extension)
    if(extension == 'jpg' || extension == 'png' || extension == 'bmp'|| extension == 'svg'){
        console.log('imagem')
        add_to_api(url.value, alt.value)
    }
})

function add_to_api(url, alt){
    var json = {
        'location': url,
        'description': alt
    }
    var options = {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'content-type': 'application/json'
        }
    }

    var requisition = fetch(api_url, options)
    var data = requisition.then(function(response){
        console.log(response.status)
        return response.json()
    }).finally(function(){window.location.reload(true)})
    data.then(function(){
        console.log(data)
    })
}

function goToImg(imgId){
    var thumb = thumbnails[imgId]
    if(thumb != undefined){
        img.innerHTML = thumb.innerHTML+btns
        img.setAttribute('data-img-id', thumb.id)
        img.setAttribute('class', '')
        addBtns()
    }
    
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

remove_btn.addEventListener('click', function(event){
    var req = fetch(api_url, {method:'DELETE'})
    req.finally(function(){window.location.reload(true)})
})