var id = '60417'
const api_url = 'https://projetofinal-ppw.herokuapp.com/api/'+id

// var requisition = fetch(api_url)
// var data = requisition.then(function(response){
//     return response.json()
// })
var data_requisition = fetch(api_url)
var data = data_requisition.then(function(response){
    return response.json()
})
var box = document.getElementById('albun-box')
data.then(function(data){
    console.log(data)
    for(var item of data){
        console.log(item)
        var div = document.createElement('div')
        div.setAttribute('class', 'img-thumbnail')
        var img = document.createElement('img')
        img.setAttribute('src', item.location)
        img.setAttribute('alt', item.description)
        div.appendChild(img)
        box.appendChild(div)
    }
})

var albuns = document.getElementsByClassName("albun-cover")
for(var i = 0; i<albuns.length; i++){
    albuns[i].addEventListener('click', zoom_img())
}

var form = document.getElementById('main-form')
console.log(form)

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

document.getElementsByTagName('h1')[0].addEventListener('click', function(){
    var options = {
        method: 'DELETE',
    }
    var requisition = fetch(api_url, options)
    requisition.then(function(response){
        console.log(response.status)
    })
})