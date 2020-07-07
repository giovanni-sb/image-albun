var id = '60417'
const api_url = 'https://projetofinal-ppw.herokuapp.com/api/'+id

// var requisition = fetch(api_url)
// var data = requisition.then(function(response){
//     return response.json()
// })

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
    if(extension == 'jpg' || extension == 'png' || extension == 'bmp'){
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
    window.location.reload(true)
}