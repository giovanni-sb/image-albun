var id = '60417'
var api_url = 'https://projetofinal-ppw.herokuapp.com/api/'+id

// var requisition = fetch(api_url)
// var data = requisition.then(function(response){
//     return response.json()
// })

var albuns = document.getElementsByClassName("albun-cover")
for(var i = 0; i<albuns.length; i++){
    albuns[i].addEventListener('click', function(event) {
        window.location = "./albun.html?id="+this.id
    })
}

var form = document.getElementById('main-form')
console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault()
    var confirm_window = document.getElementById('confirmation_window')
    console.log('click')
    var url = document.getElementById('url-input')
    var extension = url.value.split(".").slice(-1)[0]
    if(extension == 'jpg' || extension == 'png' || extension == 'bmp'){
        var [alt, albun] = confirmation_window()
        console.log('imagem')
        add_image(url.value, alt.value, albun.value)
    }
})

function confirmation_window(){

}

function add_image(url, description, albun){
    var json = {
        "albun-id": albun,
        "img-url": url,
        "alt": description,
    }
    console.log(json)
}

function add_to_api(json){
    
}