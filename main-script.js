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
    console.log('click')
    var input = document.getElementById('url-input')
    console.log(input.value.split(".").slice(-1)[0])
    if(input.value.split(".").slice(-1)[0] == ('png' || 'jpg' || 'bmp')){
        console.log('imagem')
        add_url_to_api(input.value)
    }
})

function add_url_to_api(url){
    
}